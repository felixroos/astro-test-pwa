import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [AstroPWA()],
  trailingSlash: "ignore",
  outDir: "docs",
  build: {
    format: "directory",
  },
});
