// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    assetsPublicPathBuild: '/bs-bingo/dist/',
    productionSourceMap: true
  },
  dev: {
    port: 3200,
    proxyTable: {
        '/api/*': {
          target: 'http://localhost:1337',
          secure: false
        }
    }
  }
}
