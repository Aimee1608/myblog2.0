{
  mode: 'development',
  context: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/dist',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/src',
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
      '.js',
      '.vue',
      '.json'
    ],
    modules: [
      'node_modules',
      '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules',
      '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules',
      '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/.cache/vue-loader',
              cacheIdentifier: '2bee7c77'
            }
          },
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-loader/lib/index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/.cache/vue-loader',
              cacheIdentifier: '2bee7c77'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/.cache/babel-loader',
              cacheIdentifier: 'bb6bdaaa'
            }
          },
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/@vue/cli-service/lib'
        ],
        use: [
          {
            loader: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '78eac4dc',
              emitWarning: true,
              emitError: false,
              eslintPath: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/node_modules/eslint',
              formatter: undefined
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxAsyncRequests: 6,
      maxInitialRequests: 6,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10
        },
        elementUI: {
          name: 'chunk-elementUI',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          priority: 20
        },
        svgIcon: {
          name: 'chunk-svgIcon',
          test: function () { /* omitted long function */ },
          priority: 30
        },
        commons: {
          name: 'chunk-commons',
          minChunks: 2,
          priority: 0,
          reuseExistingChunk: true
        }
      }
    },
    minimize: true,
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'myblog2.0',
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/public',
          to: '/Users/aimee/Documents/学习资料/blog/博客/myblog2.0/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    {
      opts: {
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        reportFilename: null,
        reportTitle: function () { /* omitted long function */ },
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        excludeAssets: null,
        logLevel: 'info',
        startAnalyzer: true,
        analyzerPort: 8888
      },
      server: null,
      logger: {
        activeLevels: new Set([
          'info',
          'warn',
          'error',
          'silent'
        ])
      }
    },
    {
      matches: [],
      options: {},
      patterns: [
        [
          '_baseIndexOf',
          '_strictIndexOf'
        ],
        [
          '_cacheHas',
          '_arrayIncludes'
        ],
        [
          '_createSet',
          'noop'
        ],
        [
          '_MapCache',
          '_ListCache'
        ],
        [
          '_SetCache',
          'castArray'
        ],
        [
          '_Stack',
          '_ListCache'
        ],
        [
          '_getFuncName',
          'stubString'
        ],
        [
          '_isLaziable',
          'stubFalse'
        ],
        [
          '_LodashWrapper',
          'noop'
        ],
        [
          '_baseClone',
          'identity'
        ],
        [
          '_baseToNumber',
          'identity'
        ],
        [
          '_baseToString',
          'identity'
        ],
        [
          '_toKey',
          'identity'
        ],
        [
          'toFinite',
          'identity'
        ],
        [
          'toInteger',
          'identity'
        ],
        [
          'toLength',
          'identity'
        ],
        [
          'toNumber',
          'identity'
        ],
        [
          'toString',
          'identity'
        ],
        [
          '_baseAggregator',
          '_arrayAggregator'
        ],
        [
          '_baseFilter',
          '_arrayFilter'
        ],
        [
          '_baseMap',
          '_arrayMap'
        ],
        [
          'each',
          '_arrayEach'
        ],
        [
          'eachRight',
          '_arrayEachRight'
        ],
        [
          'every',
          '_arrayEvery'
        ],
        [
          'filter',
          '_arrayFilter'
        ],
        [
          'forEach',
          '_arrayEach'
        ],
        [
          'forEachRight',
          '_arrayEachRight'
        ],
        [
          'includes',
          '_arrayIncludes'
        ],
        [
          'map',
          '_arrayMap'
        ],
        [
          'reduce',
          '_arrayReduce'
        ],
        [
          'reduceRight',
          '_arrayReduceRight'
        ],
        [
          'sample',
          '_arraySample'
        ],
        [
          'sampleSize',
          '_arraySampleSize'
        ],
        [
          'shuffle',
          '_arrayShuffle'
        ],
        [
          'some',
          '_arraySome'
        ],
        [
          '_createWrap',
          '_createPartial'
        ],
        [
          'unary',
          '_baseUnary'
        ],
        [
          'deburr',
          'toString'
        ],
        [
          '_baseGetTag',
          '_objectToString'
        ],
        [
          '_equalByTag',
          'eq'
        ],
        [
          '_getAllKeys',
          '_nativeKeys'
        ],
        [
          '_getAllKeysIn',
          '_nativeKeysIn'
        ],
        [
          '_getSymbols',
          'stubArray'
        ],
        [
          '_getSymbolsIn',
          'stubArray'
        ],
        [
          '_getTag',
          '_objectToString'
        ],
        [
          '_initCloneByTag',
          'identity'
        ],
        [
          '_mapToArray',
          'stubArray'
        ],
        [
          '_setToArray',
          'stubArray'
        ],
        [
          '_setToPairs',
          'stubArray'
        ],
        [
          'isArguments',
          'stubFalse'
        ],
        [
          'isArrayBuffer',
          'baseIsArrayBuffer'
        ],
        [
          'isBuffer',
          'stubFalse'
        ],
        [
          'isDate',
          'baseIsDate'
        ],
        [
          'isMap',
          'stubFalse'
        ],
        [
          'isRegExp',
          'baseIsRegExp'
        ],
        [
          'isSet',
          'stubFalse'
        ],
        [
          'isSymbol',
          'stubFalse'
        ],
        [
          'isTypedArray',
          'stubFalse'
        ],
        [
          '_baseFlatten',
          'head'
        ],
        [
          '_flatRest',
          'identity'
        ],
        [
          '_getNative',
          '_getValue'
        ],
        [
          '_getRawTag',
          '_objectToString'
        ],
        [
          '_isIterateeCall',
          'stubFalse'
        ],
        [
          '_isPrototype',
          'stubFalse'
        ],
        [
          '_baseKeys',
          '_nativeKeys'
        ],
        [
          '_baseKeysIn',
          '_nativeKeysIn'
        ],
        [
          '_castFunction',
          'identity'
        ],
        [
          '_castRest',
          'identity'
        ],
        [
          '_shortOut',
          'identity'
        ],
        [
          'isNaN',
          'baseIsNaN'
        ],
        [
          'isNative',
          'stubTrue'
        ],
        [
          'keys',
          '_nativeKeys'
        ],
        [
          'keysIn',
          '_nativeKeysIn'
        ],
        [
          'times',
          '_baseTimes'
        ],
        [
          '_memoizeCapped',
          'identity'
        ],
        [
          'memoize',
          'identity'
        ],
        [
          '_baseSetData',
          'identity'
        ],
        [
          '_getData',
          'noop'
        ],
        [
          '_mergeData',
          'identity'
        ],
        [
          '_setData',
          'identity'
        ],
        [
          '_setToString',
          'identity'
        ],
        [
          '_setWrapToString',
          'identity'
        ],
        [
          '_baseGet',
          '_getValue'
        ],
        [
          '_castPath',
          'castArray'
        ],
        [
          '_isKey',
          'identity'
        ],
        [
          '_parent',
          'identity'
        ],
        [
          'has',
          '_baseHas'
        ],
        [
          'hasIn',
          '_baseHasIn'
        ],
        [
          'property',
          '_baseProperty'
        ],
        [
          'propertyOf',
          '_basePropertyOf'
        ],
        [
          '_getHolder',
          'noop'
        ],
        [
          '_replaceHolders',
          'stubArray'
        ],
        [
          '_baseIteratee',
          'identity'
        ],
        [
          '_hasUnicode',
          'stubFalse'
        ],
        [
          '_hasUnicodeWord',
          'stubFalse'
        ],
        [
          '_unicodeSize',
          '_asciiSize'
        ],
        [
          '_unicodeToArray',
          '_asciiToArray'
        ],
        [
          '_unicodeWords',
          '_asciiWords'
        ],
        [
          'stringSize',
          '_asciiSize'
        ],
        [
          'stringToArray',
          '_asciiToArray'
        ]
      ],
      resolve: function () { [native code] }
    },
    {
      resourceRegExp: /moment[/\\]locale$/,
      newContentResource: undefined,
      newContentRecursive: undefined,
      newContentRegExp: /ja|it/
    }
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
