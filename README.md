# chrome-extension-demo

## Install
```shell
# npm
npm install vite-plugin-crx-mv3 -D
# or yarn
yarn add vite-plugin-crx-mv3 -D
# or pnpm
pnpm add vite-plugin-crx-mv3 -D
```

## Configuration
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import crx from 'vite-plugin-crx-mv3'

export default defineConfig({
  plugins: [
    vue(),
    crx({
      manifest: './src/manifest.json'
    }),
  ],
})
```

## Run
```shell
# development
npm run dev
# production
npm run build
```

## More Information
[vite-plugin-vue-crx3](https://github.com/yeqisong/vite-plugin-vue-crx3)
