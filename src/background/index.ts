import { requestFetch } from './fetch'

// const color = "#3aa757";
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color })
//   console.log("Default background color set to %cgreen", `color: ${color}`)
//   showNotification("basic", "Set Color", "Set successfully")
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender, sendResponse)
  const { type, url, options } = request
  if (type === 'fetch') {
    requestFetch(url, options)
      .then((res: any) => {
        console.log(res)
        if (!res.ok) return Promise.reject(res.statusText)
        return options.headers['Content-Type'] === 'application/json' ? res.json() : res.text()
      })
      .then((data:any) => sendResponse(data))
      .catch((error:any) => {
        console.log(error)
        return sendResponse(error)
      })

    return true // Will respond asynchronously.
  }
  return true
})
