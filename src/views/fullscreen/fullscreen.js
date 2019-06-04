// 浏览器前缀
let prefixName = ''
// 是否支持全屏
let fullscreenEnabled = true
// 是否处于全屏状态
let isFullScreen = false

/**
 * @description: 将传进来的元素全屏
 * @param {String} domName 要全屏的dom名称
 */
let fullScreen = (domName) => {
  console.log('fullScreen')
  if (fullscreenEnabled) {
    const element = document.querySelector(domName)
    console.log(element, 'element', prefixName)
    if (element) {
      const methodName = prefixName === '' ? 'requestFullscreen' : `${prefixName}RequestFullScreen`
      console.log(methodName)
      element[methodName]()
    }
  }
}
// 退出全屏
let exitFullScreen = () => {
  console.log('exitFullScreen', isFullScreen)
  if (fullscreenEnabled) {
    const methodName =
      prefixName === '' ? 'exitFullscreen' : `${prefixName}ExitFullscreen`
    if (isFullScreen) {
      document[methodName]()
    }
  }
}
/**
 * @description: 监听进入/离开全屏
 * @param {Function} enter 进入全屏的回调
 *  @param {Function} quit 离开全屏的回调
 */
let screenChange = (enter, quit) => {
  console.log('screenChange', fullscreenEnabled)
  supportFullscreen(
    () => {
      console.log('该浏览器不支持全屏')
    }
  )
  if (!fullscreenEnabled) return
  const methodName = `on${prefixName}fullscreenchange`
  document[methodName] = e => {
    if (isElementFullScreen()) {
      enter && enter(e) // 进入全屏回调
    } else {
      quit && quit(e) // 离开全屏的回调
    }
  }
}
/**
 * @description: 浏览器无法进入全屏时触发,可能是技术原因，也可能是用户拒绝：比如全屏请求不是在事件处理函数中调用,会在这里拦截到错误
 * @param {Function} enterErrorFn 回调
 */
let screenError = (enterErrorFn) => {
  const methodName = `on${prefixName}fullscreenerror`
  console.log('screenError', methodName)
  document[methodName] = e => {
    enterErrorFn && enterErrorFn(e)
  }
}
/**
 * @description: 是否支持全屏+判断浏览器前缀
 * @param {Function} fn 不支持全屏的回调函数 这里设了一个默认值
 */
let supportFullscreen = (fn) => {
  console.log('supportFullscreen')
  // 判断浏览器前缀
  if (document.fullscreenEnabled) {
    console.log('document.fullscreenEnabled')
    fullscreenEnabled = document.fullscreenEnabled
  } else if (document.webkitFullscreenEnabled) {
    console.log('document.webkitFullscreenEnabled')
    fullscreenEnabled = document.webkitFullscreenEnabled
    prefixName = 'webkit'
  } else if (document.mozFullScreenEnabled) {
    console.log('document.mozFullScreenEnabled')
    fullscreenEnabled = document.mozFullScreenEnabled
    prefixName = 'moz'
  } else if (document.msFullscreenEnabled) {
    console.log('document.msFullscreenEnabled')
    fullscreenEnabled = document.msFullscreenEnabled
    prefixName = 'ms'
  } else {
    fullscreenEnabled = false
    fn && fn() // 执行不支持全屏的回调
  }
  console.log('是否支持全屏+判断浏览器前缀', fullscreenEnabled, prefixName)
}
/**
 * @description: 检测有没有元素处于全屏状态
 * @return boolean
 */
let isElementFullScreen = () => {
  console.log('isElementFullScreen')
  const fullScreenElement =
    document.fullscreenElement ||
    document.msFullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement
  isFullScreen = fullScreenElement !== null
  return isFullScreen
}
export default {
  screenChange: screenChange(),
  screenError: screenError(() => { console.log('进入全屏失败') }),
  fullScreen,
  exitFullScreen
}
