import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'components',
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Specify any external dependencies here
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  // build: {
  //   lib: {
  //     entry: 'src/main.tsx',
  //     formats: ['es'],
  //     fileName: 'components.js',
  //   },
  // },
  // resolve: {
  //   alias: {
  //     'shallowequal': 'shallowequal', // Ensure shallowequal is resolved correctly
  //   },
  // },
})
