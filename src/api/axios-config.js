/**
 * 功能说明：axios配置
 * 更新说明：新建
 */

import axios from 'axios'
import config from './../utils/sync-config'

// 配置请求超时时间
axios.defaults.timeout = config.axios.timeout.value
// 配置axios基本请求地址
axios.defaults.baseURL = config.axios.baseUrl.value

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 请求之前执行
  return config
}, function (error) {
  // 请求发生错误时执行
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 可对响应response做一些操作
  return response
}, function (error) {
  // 响应发生异常时触发
  return Promise.reject(error)
})

export default axios
