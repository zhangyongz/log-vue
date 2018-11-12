// const path = require('path');
// const utils = require('./utils');
// const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// function resolve(dir) {
//   return path.resolve('../', dir)
// }

// module.exports = {
//   context: path.resolve(__dirname, '../'),
//   devtool: '#source-map',
//   entry: {
//     main: './src/index.js'
//   },
//   output: {
//     path: path.resolve(__dirname, '../', 'lib'),
//     publicPath: './',
//     filename: 'log-vue.min.js',
//     library: 'log-vue',
//     libraryTarget: 'umd',
//     umdNamedDefine: true
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.vue$/,
//         use: [
//           {
//             loader: "vue-loader"
//           }
//         ]
//       },
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           use: ['css-loader', 'postcss-loader'],
//           fallback: 'vue-style-loader',
//           publicPath: '../../'
//         })
//       },
//       {
//         test: /\.less$/,
//         use: ExtractTextPlugin.extract({
//           use: ['css-loader', 'postcss-loader', 'less-loader'],
//           fallback: 'vue-style-loader',
//           publicPath: '../../'
//         })
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         loader: "url-loader",
//         options: {
//           limit: 10000,
//           name: 'img/[name].[hash:7].[ext]'
//         }
//       },
//       {
//         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: 'media/[name].[hash:7].[ext]'
//         }
//       },
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: 'fonts/[name].[hash:7].[ext]'
//         }
//       }
//     ]
//   },
//   plugins: [
//     new VueLoaderPlugin(),
//     new ExtractTextPlugin({
//       filename: 'log-vue.min.css',
//       allChunks: true
//     }),
//   ]
// };

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
  entry: modules,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.comp.productionSourceMap,
      extract: true
    })
  },
  devtool: config.comp.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.comp.assetsRoot,
    filename: '[name]/index.js',
    library: 'log-vue',
    libraryTarget: 'umd'
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin('[name]/style.css'),
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


