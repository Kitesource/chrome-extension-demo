import db from './db'
import { showStayNotification } from './utils'

(async () => {
  await db.setValue('key1', 123)
  const res = await db.getValue('key1')
  console.log('db getValue', res)
  console.log(import.meta.env.MODE)
})()

const color = '#3aa757'
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color })
  console.log('Default background color set to %cgreen', `color: ${color}`)
  showStayNotification('basic', 'Set Color', 'Set successfully')
})
