<template>
    <div class="initialization-demo">
        <img src="../../assets/img/logo.png" alt="暂无图片"/>
    </div>
</template>

<script>
import api from '../../api/demo/demo-api'
import axiosUtil from '../../utils/axios-util'
export default {
  // 组件名称
  name: 'Demo',
  data () {
    return {
      // 标题
      title: '',
      // 版本号
      version: '',
      // 更新日期
      updateDate: '',
      // 说明
      dept: ''
    }
  },
  methods: {
    /**
     * demo
     */
    getDemoData () {
      axiosUtil.exec(
        api.getInfo({}),
        (responseData, response) => {
          this.title = responseData.title
          this.version = responseData.version
          this.updateDate = responseData.updateDate
          this.dept = responseData.dept
        },
        (failMsg) => {
          this.$message.error(failMsg)
        }
      )
    }
  },
  mounted () {
    // this.getDemoData()
  }
}
</script>

<style scoped>
    .initialization-demo{
        text-align: center;
        padding-top: 100px;
    }
</style>
