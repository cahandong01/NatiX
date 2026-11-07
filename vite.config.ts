import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  // ssr: true membuat kode klien siap menghidupkan HTML hasil prerender.
  plugins: [solidPlugin({ ssr: true })],
  server: { port: 5173 },
  build: { target: "esnext" },
  ssr: { noExternal: ["@solidjs/router"] },
});
