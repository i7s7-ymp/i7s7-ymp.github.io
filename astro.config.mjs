// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://i7s7-ymp.github.io',
  output: 'static',
  server: {
    port: 3000
  }
});
