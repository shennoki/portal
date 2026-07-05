import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://shinki.net',
  security: {
    // CSP は meta タグとして出力され、インライン script/style のハッシュは自動生成される。
    // frame-ancestors 等の meta 非対応ディレクティブは customHttp.yml（Amplify）側で設定。
    csp: {
      directives: [
        "default-src 'none'",
        "img-src 'self'",
        "font-src 'self'",
        "manifest-src 'self'",
        "base-uri 'none'",
        "form-action 'none'",
      ],
      styleDirective: {
        resources: ["'self'"],
      },
    },
  },
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
