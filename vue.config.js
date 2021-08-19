'use strict'
const path = require('path')
const port = process.env.port || 8087 // dev port
module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://aimeeserver.mangoya.cn:8999/v1',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '' // 请求的时候使用这个api就可以
        }
      },
      '/aimeeserver': {
        target: 'https://aimeeserver.mangoya.cn/v1',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/aimeeserver': '' // 请求的时候使用这个api就可以
        }
      }
    },
    host: 'aimeeblog.mangoya.cn',
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, 'src')
      }
    }
  }

}
