const WebpackBar = require("webpackbar");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   type: "asset/resource",
      //   generator: {
      //     // name: "[name].[ext]",
      //     // outputPath: "assets/",
      //     filename: "assets/[name][ext]",
      //   },
      // },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/test-icon.png",
    }),
    // @ts-ignore
    new WebpackBar(),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
