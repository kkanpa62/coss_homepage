import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { reportSummary } from './plugins/reportSummary';
import { staticPages } from './plugins/staticPages';

export default defineConfig({
  plugins: [react(), reportSummary(), staticPages()],
  base: '/',
  publicDir: 'src/public',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
