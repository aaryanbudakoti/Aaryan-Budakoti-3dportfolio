import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: "/",
  plugins: [react(), basicSsl()],
  resolve: {
    dedupe: ["react", "react-dom", "three"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: "0.0.0.0",
    https: true,
  },
  preview: {
    port: 4173,
    host: "0.0.0.0",
  },
});