const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function config (env = {}) {
  let settings = {
  	devtool: 'source-map',
    resolve: {
      modules: [
        './app',
        './node_modules'
      ]
    },
  	entry: [ './app/index.js' ],
  	output: {
  		path: (__dirname + '/dist'),
  		publicPath: '/',
  		filename: "index.js"
  	},
  	module: {
      rules: [
        { exclude: /node_modules/, test: /\.js$/, use: { loader: "babel-loader", query: { compact: false } } },
        { test: /\.png$/, loader: 'file-loader' },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: __dirname + '/app/index.html', filename: 'index.html', inject: 'body' }),
    ],
  }

  return settings
}

module.exports = config