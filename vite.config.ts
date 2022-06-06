import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(path.resolve(), '/src')
    }
  }
})
