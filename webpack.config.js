var path = require('path');
var webpack = require('webpack');

var AUTOPREFIXER_BROWSERS = ['last 2 versions'];

module.exports = {
  entry: {
    'main': [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/dev-server',
      './src/index.js'
    ]
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
        loader: 'react-hot!babel'
      },
      {
        test: /\.styl$/,
        loader: 'style!' +
                'css!' +
                'postcss!' +
                'autoprefixer?{browsers:' + JSON.stringify(AUTOPREFIXER_BROWSERS) + '}!' +
                'stylus'
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
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    contentBase: 'public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: {},
  debug: true,
  devtool: 'eval-source-map'
};
