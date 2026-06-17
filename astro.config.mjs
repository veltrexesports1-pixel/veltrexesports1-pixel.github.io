import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://veltrexesports1-pixel.github.io',
  integrations: [
    tailwind(),
    sitemap()
  ],
  vite: {
    ssr: {
      noExternal: []
    }
  }
});
