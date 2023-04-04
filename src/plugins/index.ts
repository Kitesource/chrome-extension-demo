import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import crx from 'vite-plugin-crx-mv3'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function createVitePlugins() {
  const plugins: (PluginOption | PluginOption[])[] = [
    vue(),
    crx({
      manifest: './src/manifest.json',
    }),
  ]

  plugins.push(
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ['vue'],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: [ElementPlusResolver()],
      dts: './auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
      ],

      // generate `components.d.ts` global declarations,
      dts: true,
    }),
  )
  return plugins
}
