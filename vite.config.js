import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  // Must be "/" for SSR – relative paths break server-rendered asset URLs
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@content": path.resolve(__dirname, "./src/content"),
    },
  },
  build: {
    // Client → dist/client/   Server → dist/server/
    outDir: isSsrBuild ? "dist/server" : "dist/client",
    // Emit manifest so the server can reference hashed asset filenames if needed
    ssrManifest: !isSsrBuild,
  },
  ssr: {
    // styled-components ships CJS; force Vite to bundle + ESM-ify it in SSR
    // so `styled.div`, `styled.section`, etc. resolve correctly server-side
    noExternal: ["styled-components"],
  },
  server: {
    port: 9000,
  },
}));
