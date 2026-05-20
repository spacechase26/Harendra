import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://spacechase26.github.io',
  base: '/Harendra',
  output: 'static',
  trailingSlash: 'ignore',
  server: { host: '0.0.0.0', port: 4321 },
  build: { inlineStylesheets: 'auto' },
});
