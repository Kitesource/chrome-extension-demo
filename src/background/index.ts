// import { showStayNotification } from './utils'

// const color = "#3aa757";
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color })
//   console.log("Default background color set to %cgreen", `color: ${color}`)
//   showStayNotification("basic", "Set Color", "Set successfully")
// });

const timeoutPromise = (timeout: number = 60 * 1000) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ ok: true, json: () => ({ isDelay: true }) })
  }, timeout)
})

const requestPromise = (request: any) => {
  const init: any = {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (['post', 'put'].includes(request.method.toLowerCase())) {
    init.body = JSON.stringify(request.data)
  }
  return fetch(request.url, init)
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender, sendResponse)
  if (request.type === 'fetch-post') {
    Promise.race([timeoutPromise(), requestPromise(request)])
      .then((res: any) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((data) => sendResponse({ ok: true, data }))
      .catch((error) => sendResponse({ ok: false, error }))
    return true // Will respond asynchronously.
  }
  return true
})
