import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://shinki.net',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:`
            @import "@styles/destyle.scss"; \
            @import "@styles/mixins.scss"; \
            @import "@styles/variables.scss"; \
            @import "@styles/global.scss";
          `,
        }
      }
    }
  },
});
