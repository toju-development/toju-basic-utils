import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'lvlup-js-utils',
      fileName: 'lvlup-js-utils'
    },
    sourcemap: true,
    target: 'es6',
    minify: false,
  },
  plugins: [
    dts({ outDir: 'dist', exclude: ['**/*.test.ts']}),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@Src': resolve(__dirname, 'src')
    }
  }
});
