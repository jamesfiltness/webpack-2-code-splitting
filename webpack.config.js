const path = require("path");
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app:  './src/client.js',
    vendor: ['react', 'react-dom'],
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['stage-0', 'react']
        }
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  }
}
