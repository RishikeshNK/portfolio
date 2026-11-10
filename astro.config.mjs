// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kanabar.dev',
  markdown: {
    shikiConfig: { themes: { light: 'vitesse-light', dark: 'vitesse-dark' } },
  },
});
