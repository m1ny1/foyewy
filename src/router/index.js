/**
 * 功能说明：前端路由
 * 更新说明：新建
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 初始页面
    {
      path: '/',
      name: 'demo',
      component: () => import(/* webpackChunkName: "demo" */ '../views/demo/Demo.vue')
    },
    // 全屏
    {
      path: '/fullscreen',
      component: () => import(/* webpackChunkName: "fullscreen" */ '../views/fullscreen/FullScreen.vue'),
      name: 'fullscreen'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
      children: [

      ]
    }
  ]
})
