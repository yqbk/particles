const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: [
    './app/index'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        include: [
          path.join(__dirname, 'app')
        ]
      }
    ]
  }

}
