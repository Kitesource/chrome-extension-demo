import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'

const script = document.createElement('script')
script.src = chrome.runtime.getURL('public/injected.ts');
(document.head || document.documentElement).appendChild(script)

const beforeRoot = document.querySelector('#crx-app')
if (beforeRoot && import.meta.env.MODE === 'development') {
  document.body.removeChild(beforeRoot)
}
const el = document.querySelector('#rw-preload-landing-image_div')
if (el) {
  el.insertAdjacentHTML('afterend', '<div id="crx-app"></div>')
  const app = createApp(App)
  app.mount('#crx-app')
}
