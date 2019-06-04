/**
 * 功能说明：Vuex
 * 更新说明：新建
 */
import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'
import theme from 'rnop-theme/src/store/modules/theme-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demo,
    theme
  }
})
