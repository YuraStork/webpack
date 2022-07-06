require('dotenv').config()
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const DEVELOPMENT_MODE = process.env.DEVELOPMENT_MODE;

module.exports = {
  mode: DEVELOPMENT_MODE,
  context: path.resolve(__dirname),
  devtool: "inline-source-map",
  entry: "./src/index.jsx",
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },

  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" }), new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.s(a|c)ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
      {
        test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader', options: {
          name: 'images/[hash].[ext]',
        },
      },
      {
        test: /\.(woff2?|ttf)$/i, loader: 'file-loader', options: {
          name: 'fonts/[hash].[ext]',
        },
      },
    ]
  }
}