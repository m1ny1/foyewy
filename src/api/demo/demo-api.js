/**
 * 功能说明：接口Demo
 * 更新说明：新建
 */
import axios from '../axios-config'

export default {
  /**
   * 获取版本信息
   * @param params
   * @returns {AxiosPromise<any>}
   */
  getInfo: (params) => {
    return axios.get('/demo/getVersionInfo', { params: params })
  },
  /**
   * postDemo
   * @param params
   * @returns {AxiosPromise}
   */
  postMethod: (params) => {
    return axios({
      method: 'post',
      url: '/demo/postMethod',
      data: params
    })
  },
  /**
   * getDemo
   * @param params
   * @returns {AxiosPromise}
   */
  getMethod: (params) => {
    return axios.get('/demo/getMethod', { params: params })
  }
}
