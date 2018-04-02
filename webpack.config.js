const webpack = require('webpack')
const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/script/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css']
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
          fallback: 'style-loader'
        }))
      },
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: './index.html' //relative to root of the application
    })

  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'), // a directory or URL to serve HTML from
    historyApiFallback: true, // fallback to /index.html for single page applications
    inline: true, // inline mode, (set false to disable including client scripts (like live reload))
    open: true // open default browser while launching
  },
  devtool: 'eval-source-map' // enable devtool for bettet debugging experience
}

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeCSSAssets()
  )
}