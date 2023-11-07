import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    visualizer() as unknown as PluginOption,
    react(),
    eslint(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'index',
          // '<script src="https://cdn.jsdelivr.net/npm/vue@3.2.37"></script>',
        },
      },
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      api: {
        target: 'http://182.92.21.10/api/v1/',
      },
    },
  },
  build: {
    outDir: 'build',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
});
