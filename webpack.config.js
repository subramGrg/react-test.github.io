var webpack = require('webpack');
var path = require('path');

var DEV = path.resolve(__dirname, 'dev');
var OUTPUT = path.resolve(__dirname, 'output');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: DEV + '/index.jsx',
  output: {
    path: OUTPUT,
    filename: 'main.js'
  },
  module: {
    loaders: [
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
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}

module.exports = config;
