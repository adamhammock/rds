const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')  
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {  
  context: __dirname,
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react$: path.resolve(__dirname, 'node_modules/react/dist/react.js'),
      'react-dom$': path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.js')
    }
  },
  devtool: 'eval-source-map', // init compile fast, recompile also very fast,
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
    new UglifyJsPlugin(),
    new ExtractTextPlugin('src/public/stylesheets/app.css', {
      allChunks: true
    }),
  ]
};

module.exports = config;

