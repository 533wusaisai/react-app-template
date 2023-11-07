import Axios from 'axios';
import { message as Message } from 'antd';
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const service: AxiosInstance = Axios.create({
  baseURL: '/api',
  timeout: 30000,
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = 'TOKEN';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    Message.error(error.message);
    return Promise.reject(error);
  },
);
// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response.data;
    console.log(data);
    if (data.code === 200) {
      return data;
    } else {
      return Message.error(data.message);
    }
  },
  (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let message = '';
    // HTTP 状态码
    const status = error.response?.status;
    switch (status) {
      case 401:
        message = 'token 失效，请重新登录';
        // 这里可以触发退出的 action
        break;
      case 403:
        message = '拒绝访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器故障';
        break;
      default:
        message = '网络连接故障';
    }
    Message.error(message);
    return Promise.reject(error);
  },
);

/* 导出封装的请求方法 */
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config);
  },
  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return service.post(url, data, config);
  },
  put<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return service.put(url, data, config);
  },
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config);
  },
};
