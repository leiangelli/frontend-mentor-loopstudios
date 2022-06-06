import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const path = require('path')

import babel from 'vite-plugin-babel'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        plugins: [
          "@babel/plugin-proposal-nullish-coalescing-operator",
          "@babel/plugin-proposal-optional-chaining"
        ]
      }
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: [
        'regenerator-runtime/runtime'
      ],
      polyfills: []
    }),
    reactRefresh(),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@': path.resolve(path.resolve(), '/src')
    }
  }
})
