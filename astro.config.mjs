// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://i7s7-ymp.github.io',
  output: 'static',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  integrations: [tailwind()],
});
