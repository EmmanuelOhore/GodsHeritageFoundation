import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  assetsInclude: ["**/*.JPG", "**/*.PNG", "**/*.HEIC"],
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["@rollup/rollup-linux-x64-gnu"],
    },
  },
});
