import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { BASE_URL } from '@/configs'
import { message } from 'antd';
interface Result<T = any> {
  code: number
  message: string
  result: T
}

class VAxios {
  axiosInstance: AxiosInstance

  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  // 拦截器
  setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // todo
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
    // AxiosResponse<Result>
    this.axiosInstance.interceptors.response.use(
      (response: any) => {
        const { code, message } = response.data
        if (code === 200) {
          // 将组件用的数据返回
          return response.data
        } else {
          // token 失效
          if (code === 401) {
          }
          // 处理业务错误
          message.error(message);

          return Promise.reject(new Error(message))
        }
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get(url, config)
  }
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.post(url, data, config)
  }
  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.put(url, data, config)
  }
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.delete(url, config)
  }
}

function createAxios(options: AxiosRequestConfig) {
  return new VAxios(options)
}

const request = createAxios({
  baseURL: BASE_URL,
  timeout: 30000,
})
export { request }
export default request 
