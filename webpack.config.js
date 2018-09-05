var path = require('path')
// var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') !== -1
var DEV = DEV_SERVER || process.env.DEV

module.exports = {
  mode: DEV ? 'development' : 'production',
  entry: {
    app: './src/app/index.js',
    // vendor: ['angular', 'oclazyload', 'bootstrap', 'jquery', 'popper.js']
  },
  output: {
    path: __dirname + '/static',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
        exclude: [/@uirouter/]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader' // inject CSS to page
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require('precss'), require('autoprefixer')]
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src/app')],
    extensions: ['.js']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: './src/app/index.pug' })
  ]
}
