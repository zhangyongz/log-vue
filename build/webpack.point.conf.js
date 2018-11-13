var path = require('path')
var fs = require('fs')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var modules = {}
var cPath = path.join(__dirname, '../src/components')
var files = fs.readdirSync(cPath)
if (files) {
  files.forEach(function (name) {
    var p = path.join(cPath, name)
    if (fs.statSync(p).isDirectory()) {
      modules[name] = p
    }
  })
}
baseWebpackConfig.entry = {}
var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.comp.productionSourceMap,
      extract: true
    })
  },
  devtool: config.comp.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.comp.assetsRoot,
    filename: 'log-vue.min.js',
    library: 'log-vue',
    libraryTarget: 'umd'
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin('log-vue.min.css'),
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.comp.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.comp.productionSourceMap,
      parallel: true
    })
  ]
})

module.exports = webpackConfig


