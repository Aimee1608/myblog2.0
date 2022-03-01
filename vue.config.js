'use strict'
const path = require('path')
const port = process.env.port || 8087 // dev port
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack')

const analyzer = []
// 只有分析命令的时候才执行
if (process.env.ENV_BUILD === 'analyzer') {
  analyzer.push(new BundleAnalyzerPlugin())
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  chainWebpack: (config) => {
    // 最小化代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 20000, // 允许新拆出 chunk 的最小体积，也是异步 chunk 公共模块的强制拆分体积
      maxAsyncRequests: 6, // 每个异步加载模块最多能被拆分的数量
      maxInitialRequests: 6, // 每个入口和它的同步依赖最多能被拆分的数量
      enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值并忽略其他限制
      cacheGroups: {
        libs: {
          // 第三方库
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10
          // chunks: "initial" // 只打包初始时依赖的第三方
        },
        elementUI: {
          // elementUI 单独拆包
          name: 'chunk-elementUI',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          priority: 20 // 权重要大于 libs
        },
        svgIcon: {
          // svg 图标
          name: 'chunk-svgIcon',
          test(module) {
            // `module.resource` 是文件的绝对路径
            // 用`path.sep` 代替 / or \，以便跨平台兼容
            // const path = require('path') // path 一般会在配置文件引入，此处只是说明 path 的来源，实际并不用加上
            return (
              module.resource &&
              module.resource.endsWith('.svg') &&
              module.resource.includes(`${path.sep}icons${path.sep}`)
            )
          },
          priority: 30
        },
        commons: {
          // 公共模块包
          name: `chunk-commons`,
          minChunks: 2,
          priority: 0,
          reuseExistingChunk: true
        }
      }
    })
    // 压缩图片
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1024,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]'
          }
        }
      })
      .end()
    // .use('image-webpack-loader')
    // .loader('image-webpack-loader')
    // .options({
    //   bypassOnDebug: true
    // })
    // .end()
  },
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://aimeeserver.mangoya.cn:8899/v1',
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
        vue$: 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, 'src')
      }
    },
    // 通过 compression-webpack-plugin 插件对js文件进行gzip压缩
    plugins: [
      ...analyzer,
      new LodashModuleReplacementPlugin(),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/)
    ]
  }
}
