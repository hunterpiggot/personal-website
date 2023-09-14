const WebpackBar = require("webpackbar");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname),
  devtool: "source-map",
  entry: "./src/index.tsx", // replace with your entry point
  output: {
    filename: "./output.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // @ts-ignore
  plugins: [new WebpackBar(), new ForkTsCheckerWebpackPlugin()],
};
