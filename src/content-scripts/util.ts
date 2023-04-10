interface RequestOption extends RequestInit {
  method: string,
  timeout?: number // 响应超时时间，单位毫秒
  requestInterceptors?: Function[] // 请求拦截
  responseInterceptors?: Function[] // 响应拦截
}

export function sendFetchMessage(
  type: string,
  url: string,
  options: RequestOption,
): Promise<any> {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ type, url, options }, (res) => (res.ok ? resolve(res) : reject(res)))
  })
}
