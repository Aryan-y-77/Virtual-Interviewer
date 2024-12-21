const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/, // Match CSS files
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader",   // Resolves CSS imports
          "postcss-loader" // Processes Tailwind directives
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
};
