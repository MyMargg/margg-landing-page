/**
 * server.js  –  Express SSR server
 *
 * Development  (NODE_ENV !== 'production')
 *   • Spins up Vite dev server in middleware mode
 *   • SSR module loaded via vite.ssrLoadModule (hot-reloaded)
 *   • Reads index.html from disk and transforms it through Vite
 *
 * Production   (NODE_ENV === 'production')
 *   • Serves dist/client/ as static assets
 *   • Imports pre-built dist/server/entry-server.js
 *   • Reads dist/client/index.html as the HTML template
 *
 * Per-request flow
 * ────────────────
 *   1. Fetch content (remote URL → fallback via server/fetchContent.js)
 *   2. entry-server.render(url, content)
 *      – creates fresh Redux store, dispatches content, renderToString
 *      – collects styled-components style tags
 *   3. buildHead injects meta / OG / JSON-LD / style tags
 *   4. Serialize Redux state → window.__PRELOADED_STATE__
 *   5. Stream full HTML to browser
 *
 * Vercel
 * ──────
 *   The default export is the Vercel Node.js serverless handler.
 *   See vercel.json for route config.
 */

import express from "express";
import compression from "compression";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import { fetchContent } from "./server/fetchContent.js";
import { buildHead } from "./server/buildHead.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT ?? 9000;

// Safely serialize Redux state for inline <script> injection (no XSS)
function serializeState(state) {
  return JSON.stringify(state)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/\//g, "\\u002f");
}

// ── App factory ───────────────────────────────────────────────────────────────
// Instantiated once and reused across requests (important for Vercel cold-start)

let vite;
let prodRender;
let prodTemplate;

async function createApp() {
  const app = express();
  app.use(compression());

  if (!isProduction) {
    // ── DEV: Vite middleware handles HMR + module transforms ─────────────────
    const { createServer: createViteServer } = await import("vite");
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    // ── PROD: serve pre-built client assets ──────────────────────────────────
    app.use(
      "/assets",
      express.static(resolve(__dirname, "dist/client/assets"), {
        maxAge: "1y",
        immutable: true,
      }),
    );
    app.use(
      express.static(resolve(__dirname, "dist/client"), { index: false }),
    );

    // Cache the server render module and HTML template at startup
    const mod = await import("./dist/server/entry-server.js");
    prodRender = mod.render;
    prodTemplate = readFileSync(
      resolve(__dirname, "dist/client/index.html"),
      "utf-8",
    );
  }

  // ── Request handler ─────────────────────────────────────────────────────────
  // Express v5 / path-to-regexp v8 requires named wildcards — bare "*" throws
  app.use("*splat", async (req, res) => {
    const url = req.originalUrl;

    try {
      // 1. Fetch content (server-side – no CORS)
      const content = await fetchContent();

      // 2. Load render function
      let render;
      let template;
      if (!isProduction) {
        render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
        template = readFileSync(resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
      } else {
        render = prodRender;
        template = prodTemplate;
      }

      // 3. Render React to string (returns html + styleTags + redux state)
      const { html: appHtml, styleTags, state } = await render(url, content);

      // 4. Build <head> injection (meta, OG, JSON-LD, styled-components styles)
      const headInjection = buildHead(content, styleTags);

      // 5. Assemble final HTML
      const html = template
        .replace("<!--ssr-head-->", headInjection)
        .replace("<!--ssr-html-->", appHtml)
        .replace(
          "<!--ssr-state-->",
          `<script>window.__PRELOADED_STATE__=${serializeState(state)}</script>`,
        );

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (err) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(err);
      }
      console.error("[server] render error:", err);
      res.status(500).end(err.message);
    }
  });

  return app;
}

// ── Singleton app promise (module-level cache, shared across requests) ────────

let appPromise;
function getApp() {
  if (!appPromise) appPromise = createApp();
  return appPromise;
}

// ── Local dev + production boot ───────────────────────────────────────────────
// VERCEL=1 is automatically set by Vercel – skip listen() there

if (!process.env.VERCEL) {
  getApp().then((app) => {
    app.listen(PORT, () => {
      console.log(
        `[server] http://localhost:${PORT}  (${isProduction ? "production" : "development"})`,
      );
    });
  });
}

// ── Vercel serverless handler export ─────────────────────────────────────────

export default async (req, res) => {
  const app = await getApp();
  app(req, res);
};
