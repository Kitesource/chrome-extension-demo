import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'

(() => {
  const beforeRoot = document.querySelector('#crx-app')
  if (beforeRoot && import.meta.env.MODE === 'development') {
    document.body.removeChild(beforeRoot)
  }
  const el = document.querySelector('div[cel_widget_id="showing-breadcrumbs_csm_instrumentation_wrapper"]')
  if (el) {
    el.insertAdjacentHTML('afterend', '<div id="crx-app"></div>')
    const app = createApp(App)
    app.mount('#crx-app')
  }
})()
