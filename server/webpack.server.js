const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  //   have to let webpack know that the bundle will be for node and the browser
  target: "node",
  entry: "./src/index.js",

  //   tells webpack where to put the output bundle
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
