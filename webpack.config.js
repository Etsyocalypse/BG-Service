var webpack = require('webpack')

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8081/public/',
    filename: 'bundle.js',
    libraryTarget: 'amd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types'
  }
}