import path from 'path'
import { defineConfig } from 'vite'
import createVitePlugins from './src/plugins'

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
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
  },
}))
