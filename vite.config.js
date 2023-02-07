import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const rollupConfig = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    // Add other Rollup plugins here, if necessary
  ],
  external: [
    'pdf-lib'
  ]
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  rollup: rollupConfig
})
