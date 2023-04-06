import Axios, {
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosInstance,
} from 'axios'
import { ElMessage } from 'element-plus'
import Qs from 'qs'

export interface HttpInstance extends AxiosInstance {
  /* eslint-disable no-unused-vars */
  get: (url: string, config?: AxiosRequestConfig) => Promise<any>
  delete: (url: string, config?: AxiosRequestConfig) => Promise<any>
  post: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<any>
  put: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<any>
  /* eslint-enable no-unused-vars */
}

const axios = Axios.create({

  headers: {
    'content-type': 'application/json;charset=utf-8',
  },
  paramsSerializer(params:any) {
    return Qs.stringify(params, { arrayFormat: 'repeat' })
  },
  timeout: 60 * 1000 * 5,
} as AxiosRequestConfig)

function handleResponse(res: AxiosResponse<any>, isCancel?: boolean) {
  if (isCancel) {
    return Promise.reject(res)
  }
  if (!res) {
    ElMessage.error('Error undefined')
    return Promise.reject(res)
  }

  /** check status code */
  if (res.status !== 200) {
    if (res.data.msg) {
      ElMessage.error(res.data.msg)
    }
    return Promise.reject(res.data)
  }

  return Promise.resolve(res.data)
}

// axios.interceptors.request.use((config) => {
//   return config
// })

axios.interceptors.response.use(
  async (res: any) => handleResponse(res),
  (err: Error & {response: AxiosResponse<any>}) => handleResponse(err.response, err.name === 'CanceledError'),
)

export default axios as HttpInstance
