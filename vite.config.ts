import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      rollupTypes: true,
      exclude: ['**/storybook-static/**/*', '**/*.stories.tsx', '**/*.test.tsx'],
    }), 
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/exports.ts'),
      name: 'components',
      fileName: 'components',
      formats: ['es', 'cjs', 'umd'],
    }, 
    //bundler options
    //externalize react-related imports 
    rollupOptions: {
      external: ['react', 'react-dom', 'react-jsx/time'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    }
  }
})
