const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
  		filename: 'index.js'
  	},
  	module: {
      rules: [
        { exclude: /node_modules/, test: /\.js$/, use: { loader: 'babel-loader', query: { compact: false } } },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ],
            publicPath: '/dist'
          })
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: __dirname + '/app/index.html', filename: 'index.html', inject: 'body' }),
      new ExtractTextPlugin('styles.css'),
    ],
  }

  return settings
}

module.exports = config