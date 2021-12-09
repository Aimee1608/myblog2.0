module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    'lodash',
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
