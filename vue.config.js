const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath:'localhost:8222',
  lintOnSave:false,
  devServer:{
    proxy:{
      '/lhl':{
        target:'https://movie.douban.com/',
        pathRewrite:{'^/lhl':''},
        // ws:true,
        changeOrigin:true
      }
    }
  }
})
