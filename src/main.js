/**
 * 功能说明：主入口，全局配置
 * 更新说明：新建
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import './assets/style/main.scss'
import 'babel-polyfill'
import config from './utils/sync-config'
import echarts from 'echarts'
import axios from './api/axios-config'
import moment from 'moment'
import request from '@/utils/axios-util'

// 引入echarts主题
import ThemeBlack from 'rnop-theme/echarts/echarts-theme-black.js'
import ThemeBlue from 'rnop-theme/echarts/echarts-theme-blue.js'

// 注册主题
echarts.registerTheme('black', ThemeBlack)
echarts.registerTheme('blue', ThemeBlue)
Vue.prototype.$echarts = echarts
// 将封装的请求方法挂在到vue组件的原型上
Vue.prototype.$request = request.exec
// 将axios挂在到vue组件的原型上
Vue.prototype.$http = axios
// 将moment挂在到vue组件的原型上
Vue.prototype.$moment = moment
// 将config挂在到window.$web对象
window.$web = {
  $conf: config
}

// 将config挂在到Vue.prototype.$web对象
Vue.prototype.$web = { $conf: config }

// 在部署环境下，禁止在浏览器的 console 中输出 Vue 相关的配置信息
Vue.config.productionTip = false

// element-ui 全局配置
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

// 如果是开发环境  引入mock.js
if (process.env.NODE_ENV === 'development') {
  // require('./mock/')
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
