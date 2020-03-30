var webpack = require('webpack')

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:8081/public/',
    filename: 'bundle.js',
    // libraryTarget: 'amd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
    
  },

  externals: {
    // 'react': 'react',
    // 'react-dom': 'react-dom',
    // 'prop-types': 'prop-types'
  }
}