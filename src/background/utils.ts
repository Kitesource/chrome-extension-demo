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

export const showStayHydratedNotification = () => {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'https://www.google.com/favicon.ico',
    title: 'Time to Hydrate',
    message: 'Everyday I\'m Guzzlin\'!',
    buttons: [
      { title: 'Keep it Flowing.' },
    ],
    priority: 0,
  })
}
