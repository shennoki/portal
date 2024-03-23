import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://shinki.net',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:`
            @import "@styles/_destyle.scss"; \
            @import "@styles/_mixins.scss"; \
            @import "@styles/_variables.scss"; \
            @import "@styles/_global.scss";
          `,
        }
      }
    }
  },
});
