import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer';

import path from 'path';

export default defineConfig({
  base: './',
  plugins: [visualizer() as unknown as PluginOption, react()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {},
});
