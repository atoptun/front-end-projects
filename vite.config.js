import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import glob from 'fast-glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
// CSS
import SortCss from 'postcss-sort-media-queries';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
// Images
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    base: '/front-end-portfolio/',
    root: 'src',

    css: {
      postcss: {
        plugins: [
          SortCss({
            sort: 'mobile-first',
          }),
          // autoprefixer(),              // TODO: check this
          // purgecss({                   // TODO: check this
          //   content: ['./src/**/*.html', './src/**/*.js'],
          //   safelist: {
          //     standard: [/^js-/, 'is-active', 'is-open'],
          //   },
          //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          // }),
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
      minify: false,
      rollupOptions: {
        input: Object.fromEntries(
          glob 
            // for watch while developing one project
            // .sync(['./src/projects/05-cat-crm/*.html', './src/projects/05-cat-crm/**/*.html'], {
            //   ignore: ['./src/**/_*.html'],
            // })
            // for building all projects
            .sync(['./src/*.html', './src/projects/**/*.html'], {
              ignore: ['./src/**/_*.html'],
            })
            .map(file => [
              path.relative(
                __dirname,
                file.slice(0, file.length - path.extname(file).length)
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
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
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
      // don't enable for watch, uncomment before build
      ViteImageOptimizer({
        png: {
          quality: 86,
        },
        jpeg: {
          quality: 86,
        },
        jpg: {
          quality: 86,
        },
        webp: {
          quality: 80,
        },
        avif: {
          quality: 70,
        },
        exclude: /\.svg$/i,
      }),

      // example, don't use
      // {
      //   ...imagemin(['./src/img/**/*.{jpg,png,jpeg}'], {
      //     destination: './src/img/webp/',
      //     plugins: [imageminWebp({ quality: 86 })],
      //   }),
      //   apply: 'build',
      // },
    ],
  };
});
