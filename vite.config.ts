/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'SF UI Display',
            local: 'SF UI Display',
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
