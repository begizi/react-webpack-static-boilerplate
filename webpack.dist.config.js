var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var AUTOPREFIXER_BROWSERS = ['last 2 versions'];

var routes = [
  '/',
  '/about'
];

module.exports = {
  entry: {
    'main': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!' +
                'postcss!' +
                'autoprefixer?{browsers:' + JSON.stringify(AUTOPREFIXER_BROWSERS) + '}!' +
                'stylus')
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      constants: path.resolve(__dirname, 'src/constants'),
      containers: path.resolve(__dirname, 'src/containers'),
      styles: path.resolve(__dirname, 'src/styles')
    }
  },
  devServer: {
    hot: false,
    inline: false,
    historyApiFallback: false,
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    contentBase: 'public/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('main.css'),
    new StaticSiteGeneratorPlugin('main', routes, null)
  ],
  externals: {}
};
