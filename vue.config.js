module.exports = {
  pluginOptions: {
    antd: {
      importType: 'modularized',
      style: true
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    // development server port 8000
    port: 8000,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/api': {
        target: 'http://ec.maimikj.com',/* 目标代理服务器地址 */
        ws: true,
        changeOrigin: true
      }
    }
  },
}
