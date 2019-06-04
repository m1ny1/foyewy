/**
 * 功能说明：webpack配置，更多配置请参考
 * https://github.com/vuejs/vue-cli/tree/dev/docs/config
 * 更新说明：新建
 */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   */
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 输出资源路径
  assetsDir: 'static',
  // 输出index.html路径
  indexPath: 'index.html',
  // 是否使用hash后缀名，
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // webpack配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      return {
        plugins: [
        // 移除console
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                warnings: false,
                drop_console: true,
                pure_funcs: ['console.log']
              }
            }
          })
        ]
      }
    } else {
      return {
        plugins: []
      }
    }
  },
  // 配置loader
  chainWebpack: config => {
    // 设置不进行预加载
    config.plugins.delete('prefetch')
    // 设置可通过@定位到src文件夹
    config.resolve.alias
      .set('@', resolve('src'))
    config.module
      .rule('excel')
      .test(/\.(xlsx|xls)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        if (process.env.NODE_ENV === 'production') {
          return {
            name: path.posix.join('./', 'static/templates/[name].[ext]')
          }
        } else {
          return {
            name: '[name].[ext]'
          }
        }
      })
      .end()
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    // 设置代理 常用于跨域访问
    // proxy: {
    //   '/': {
    //     target: 'http://192.168.3.97:8111/',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api/old-path': '/api/new-path', // rewrite path
    //       '^/api/remove/path': '/path' // remove base path
    //     }
    //   },
    //   '/test': {
    //     target: 'http://192.168.3.97:8111/'
    //   }
    // },
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {}
}
