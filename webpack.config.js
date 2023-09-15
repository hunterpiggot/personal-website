const WebpackBar = require("webpackbar");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv").config();

const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname),
  devtool: "source-map",
  entry: "./src/index.tsx", // replace with your entry point
  output: {
    filename: "./output.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    port: 3000,
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
      {
        test: /\.pdf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      fs: false, // or path to a module that provides an empty implementation
      path: require.resolve("path-browserify"), // make sure to install path-browserify
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/test-icon.png",
    }),
    // @ts-ignore
    new WebpackBar(),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.SENDGRID_API_KEY": JSON.stringify(
        process.env.SENDGRID_API_KEY
      ),
      "process.env.PUBLIC_API_URL": JSON.stringify(
        // @ts-ignore
        dotenv.parsed.PUBLIC_API_URL
      ),
    }),
  ],
};
