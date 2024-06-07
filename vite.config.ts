import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import postcssImport from 'postcss-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
      ],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/exports.ts'),
      name: 'components',
      formats: ['es', 'cjs'],
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
})
