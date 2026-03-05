import { defineConfig } from 'vite';
import { glob } from 'glob';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';
// import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    base: '/front-end-projects/',
    root: 'src',

    css: {
      postcss: {
        plugins: [
          SortCss({
            sort: 'mobile-first',
          }),
        ],
      },
    },

    resolve: {
      alias: {
        '@css': resolve(__dirname, './src/css'),
      },
    },

    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/**/*.html', {
          ignore: './src/**/partials/**/*.html',
        }),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return 'assets/js/[name]-[hash].js';
          },
          assetFileNames: assetInfo => {
            const info = (assetInfo.names?.[0] || '').split('.');
            const extType = info[info.length - 1];

            if (/avif|webp|png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `assets/img/[name]-[hash][extname]`;
            }
            if (/css/i.test(extType)) {
              return `assets/css/[name]-[hash][extname]`;
            }
            if (/woff|woff2/.test(extType)) {
              return `assets/fonts/[name][extname]`;
            }

            return `assets/[name]-[hash][extname]`;
          },
        },
      },
      outDir: '../dist',
      emptyOutDir: true,
    },
    plugins: [injectHTML(), FullReload(['./src/**/*.html'])],
  };
});
