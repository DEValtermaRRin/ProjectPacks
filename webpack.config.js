const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './js/index.js',
  // mode: 'development',
  output: {
    filename: 'main.[contenthash].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css'}),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    port: 3333,
    watchFiles: ['./*']
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.(css)$/i,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  }
}