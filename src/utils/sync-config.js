/**
 * 功能说明：同步请求config.json文件
 * 更新说明：新建
 */
// 定义配置变量
let config

// 定义同步获取json文件数据方法
let syncGetJsonData = function (url) {
  let xhr = new XMLHttpRequest()
  xhr.open('get', url, false)
  xhr.send()
  return JSON.parse(xhr.responseText)
}

if (!window.$web) {
  window.$web = {}
}

config = syncGetJsonData('./config/config.json?r=' + Math.random())

export default config
