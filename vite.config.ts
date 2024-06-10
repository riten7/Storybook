import { defineConfig } from 'vite'
import { resolve } from 'path';
// import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
// import tsconfigPaths from 'vite-tsconfig-paths'
import {  peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/exports.ts'),
      name: 'components',
      fileName: (format) => `components.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },  
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    emptyOutDir: true,
  },
  plugins: [
    // react(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],  
    }),
  ]
})
