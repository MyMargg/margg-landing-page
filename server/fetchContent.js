/**
 * fetchContent.js  (server-side)
 *
 * Fetches site content from the remote VITE_CONTENT_URL (env var) and
 * deep-merges it over the local fallback.  Falls back silently if the URL is
 * absent or the request fails.
 *
 * Runs in Node — no CORS restrictions apply here.
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentJsonPath = resolve(__dirname, "../src/content/content.json");
const isDev = process.env.NODE_ENV !== "production";

// In production: read once at module load and cache (fast).
// In development: re-read on every request so edits to content.json are
// picked up without restarting the server.
let _fallbackCache = null;
function getFallback() {
  if (!isDev && _fallbackCache) return _fallbackCache;
  _fallbackCache = JSON.parse(readFileSync(contentJsonPath, "utf-8"));
  return _fallbackCache;
}

// ─── Deep-merge helper ────────────────────────────────────────────────────────
// Arrays in `override` fully replace their base counterpart.

function deepMerge(base, override) {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    return override ?? base;
  }
  const result = { ...base };
  for (const key of Object.keys(override)) {
    if (
      typeof override[key] === "object" &&
      override[key] !== null &&
      !Array.isArray(override[key]) &&
      typeof base[key] === "object" &&
      base[key] !== null &&
      !Array.isArray(base[key])
    ) {
      result[key] = deepMerge(base[key], override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

// ─── Main export ─────────────────────────────────────────────────────────────

export async function fetchContent() {
  const remoteUrl = process.env.VITE_CONTENT_URL;

  if (!remoteUrl) {
    return { ...getFallback(), _source: "fallback" };
  }

  try {
    const res = await fetch(remoteUrl, {
      signal: AbortSignal.timeout(5000),
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const remote = await res.json();
    const merged = deepMerge(getFallback(), remote);
    return { ...merged, _source: "remote" };
  } catch (err) {
    console.warn(
      "[fetchContent] Remote fetch failed – using local fallback.",
      err.message,
    );
    return { ...getFallback(), _source: "fallback" };
  }
}
