import path from 'path'
import { defineConfig } from 'vite'
import createVitePlugins from './src/plugins'

const resolve = (...args: string[]) => path.resolve(__dirname, '.', ...args)

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use './src/styles/element.scss' as *;",
      },
    },
  },
  plugins: [...createVitePlugins()],
  build: {
    emptyOutDir: mode === 'production',
    outDir: mode === 'production' ? resolve('dist-prod') : resolve('dist-dev'),
  },
}))
