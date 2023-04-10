interface RequestOption extends RequestInit {
  method?: string,
  timeout?: number // 响应超时时间，单位毫秒
  requestInterceptors?: Function[] // 请求拦截
  responseInterceptors?: Function[] // 响应拦截
}

export function requestFetch(url:string, options:RequestOption = {}) {
  // 默认配置
  const defaultOptions = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 100,
    requestInterceptors: [],
  }

  // 合并配置
  options = { ...defaultOptions, ...options }

  // 发送请求前的拦截器
  if (options.requestInterceptors?.length) {
    options.requestInterceptors.forEach((interceptor) => {
      interceptor(options)
    })
  }

  // 发送请求
  return Promise.race([
    fetch(url, {
      method: options.method,
      headers: options.headers,
      body: options.body,
      credentials: options.credentials,
    }),
    new Promise((_, reject) => setTimeout(
      () => reject(new Error('Request timed out, please try again')),
      options.timeout,
    )),
  ])
    .then((res:any) => {
      // 响应拦截器
      if (options.responseInterceptors?.length) {
        options.responseInterceptors.forEach((interceptor) => {
          res = interceptor(res)
        })
      }
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }
      return Promise.resolve(res)
    })
}
