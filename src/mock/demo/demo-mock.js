/**
 * 功能说明：模拟数据demo
 * 更新说明：新建
 */
const Mock = require('mockjs')
Mock.setup({
  timeout: 2000
})
Mock.mock(/demo\/getVersionInfo/, 'get', {
  status: 0,
  message: '',
  data: {
    title: '前端工程模板',
    version: 'V1.0.2',
    updateDate: '2019/1/7',
    dept: '网优事业部'
  }
})
