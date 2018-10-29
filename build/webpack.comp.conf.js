const path = require('path');
const utils = require('./utils');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.resolve('../', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  devtool: '#source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../', 'lib'),
    publicPath: './',
    filename: 'log-vue.min.js',
    library: 'log-vue',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'vue-style-loader',
          publicPath: '../../'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'less-loader'],
          fallback: 'vue-style-loader',
          publicPath: '../../'
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      filename: 'log-vue.min.css',
      allChunks: true
    }),
  ]
};