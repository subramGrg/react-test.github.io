var webpack = require('webpack');
var path = require('path');

var DEV = path.resolve(__dirname, 'dev');
var OUTPUT = path.resolve(__dirname, 'output');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: DEV + '/index.jsx',
  output: {
    path: OUTPUT,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        include: DEV,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[path]-[name]-[local]'
            }
          }, {
            loader: 'sass-loader'
          }
        ])
      }, {
        test: /\.html$/,
        use: ['html-loader']
      }, {
        test: /\.(jpg|png$)/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }]
      } ,{
        test: /\.woff$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'dev/index.html'
    })
  ]
}

module.exports = config;
