const path = require('path')

module.exports = {

  entry: [
    './app/animation'
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
