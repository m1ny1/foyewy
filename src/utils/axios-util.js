/**
 * 功能说明：请求封装类
 * 更新说明：新建
 */

/**
 * 请求执行封装方法
 * @param request 执行axios请求方法返回的promise对象
 * @param successCallback 成功时的回调方法
 * @param failCallback 失败时的回调方法
 */
let exec = (request, successCallback, failCallback) => {
  request.then((response) => {
    // 如果后台返回成功
    if (response.data.status === 0) {
      if (successCallback) {
        // 执行成功回调方法，将后台返回数据回填至参数
        successCallback(response.data.data, response.data)
      }
    } else {
      // 如果后台返回失败
      if (failCallback) {
        // 执行失败回调方法
        failCallback(`服务失败：${response.data.message}`)
      }
    }
  }).catch((error) => {
    if (failCallback) {
      failCallback(`请求异常：${error}`)
    }
  })
}

export default {
  exec
}
