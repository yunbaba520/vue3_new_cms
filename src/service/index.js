import { BASE_URL, TIME_OUT } from './config'
import Request from './request'

// 根据不同配置创建不同axios实例
export const gsRequest = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      // const token = localCache.getCacheString("login/token");
      // if (config.headers && token) {
      //   config.headers.Authorization = "Bear " + token;
      // }
      return config
    },
    requestFailureFn(err) {
      return err
    },
    responseSuccessFn(res) {
      return res
    },
    responseFailureFn(err) {
      return err
    }
  }
})
