<template>
    <router-view id="app"></router-view>
</template>
<script>
import rnopTheme from 'rnop-theme'
import '@/utils/iconfont'
export default {
  // 组件名称
  name: 'App',
  methods: {
    addIconJsFile (url) {
      let script = document.createElement('script')
      script.type = 'application/javascript'
      script.src = url
      let head = document.getElementsByTagName('head')[0]
      head.appendChild(script)
    }
  },
  mounted () {
    rnopTheme.theme.rnopTheme(this)
    // this.addIconJsFile(`${window.$web.$conf.cdnUrl.value}/icon/iconfont.js?v=${Math.random()}`)
  }
}
</script>
