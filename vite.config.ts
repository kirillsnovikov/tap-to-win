/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'SF UI Display',
            local: 'YTYYT',
            src: './public/fonts/sf-ui-display/*.woff',
          },
        ],
        preload: true,
      },
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {
    alias: {
      '@src': '/src',
      '@shared': '/src/shared',
      '@app': '/src/app',
      '@public': '',
    },
  },
});
