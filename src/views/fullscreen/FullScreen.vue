<!--
功能：请填写 FullScreen 功能描述
作者：大鸟
邮箱：wangyi1@boco.com.cn
-->
<template>
    <div>
        <div class="top">
            <el-button @click="leftScreen">左边全屏</el-button>
            <el-button @click="rightScreen">右边全屏</el-button>
        </div>
        <div class="main">
            <div class="left">
                <el-button @click="redScreen">红色全屏</el-button>
                <el-button @click="exitScreen">退出全屏</el-button>
                <div class="left-son">
                    <el-button @click="exitScreen">红色退出全屏</el-button>
                    <span>左边的内容</span>
                </div>
            </div>
            <div class="right">右边的内容</div>
        </div>
    </div>
</template>

<script>
import full from './fullscreen'
export default {
  // 组件名称
  name: 'FullScreen',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
    return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  mounted () {
  },
  // 组件方法
  methods: {
    leftScreen () {
      console.log('leftScreen')
      full.fullScreen('.left')
    },
    rightScreen () {
      console.log('rightScreen')
      full.fullScreen('.right')
    },
    redScreen () {
      console.log('redScreen')
      full.fullScreen('.left-son')
    },
    // 退出全屏 退出到上次的状态
    exitScreen () {
      console.log('exitScreen')
      full.exitFullScreen()
    }
  }
}
</script>

<style scoped>
    .top {
        margin: 15px;
    }
    .main {
        width: 100%;
        height: 1000px;
        display: flex;
    }
    .left {
        width: 50%;
        height: 60%;
        background: gray;
        padding: 20px;
    }
    .left-son {
        width: 80%;
        height: 50%;
        margin: 15px;
        background: red;
    }
    .right {
        width: 50%;
        height: 60%;
        background: #dddddd;
    }
    /* 针对dom的全屏设置 */
    .left:-webkit-full-screen {
        background: #fff;
    }
    /* 全屏属性 */
    :-webkit-full-screen {
    }
    :-moz-full-screen {
    }
    :-ms-fullscreen {
    }
    /* 全屏伪类 当前chrome:70 不支持 */
    :fullscreen {
        /* IE11支持 */
    }
</style>
