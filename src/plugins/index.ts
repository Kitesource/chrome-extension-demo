import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import crx from 'vite-plugin-crx-mv3'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

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
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => `element-plus/theme-chalk/${name}.css`,
        },
      ],
    }),
  )
  return plugins
}
