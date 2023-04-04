export const onMessage = (taskId: string, callback: Function) => {
  chrome.runtime.onMessage.addListener((request:any, sender:any, sendResponse:any) => {
    const { params } = request
    if (request.taskId === taskId) {
      const result = callback(params)
      if (result && result.then) {
        result.then((info:any) => {
          sendResponse(info)
        })
      } else {
        sendResponse(result)
      }
    }
    return true
  })
}

export const sendMessage = (taskId: string, params: any) => new Promise((resolve) => {
  chrome.runtime.sendMessage(
    {
      taskId,
      params,
    },
    (result) => {
      resolve(result)
    },
  )
})
