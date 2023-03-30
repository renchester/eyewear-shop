/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint({
      emitError: true,
      failOnError: false,
      failOnWarning: false,
    }),
    react(),
  ],
  server: {
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    include: [],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
