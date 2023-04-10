export function sendFetchMessage(
  type: string,
  url: string,
  method: string,
  data: any,
): Promise<any> {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
      type, url, data, method,
    }, (res) => (res.ok ? resolve(res) : reject(res)))
  })
}
