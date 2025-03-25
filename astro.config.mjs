// @ts-check
import { defineConfig } from "astro/config";

const PORT = 4000;

// https://astro.build/config
export default defineConfig({
  server: {
    port: PORT,
    open: true,
    host: true,
  },
});
