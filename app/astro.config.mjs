import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://shinki.net',
  vite: {
    resolve: {
      alias: {
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData:`
            @use "@styles/_destyle.scss" as *; \
            @use "@styles/_mixins.scss" as *; \
            @use "@styles/_variables.scss" as *; \
            @use "@styles/_global.scss" as *;
          `,
        }
      }
    }
  },
});
