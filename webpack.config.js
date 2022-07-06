require('dotenv').config()
const path = require('path');
const DEVELOPMENT_MODE = process.env.DEVELOPMENT_MODE;

module.exports = {
  mode: DEVELOPMENT_MODE,
  context: path.resolve(__dirname),
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output:{
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    clean: true
  }
}