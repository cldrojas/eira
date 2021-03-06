const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // This says to webpack that we are in development mode and write the code in webpack file in different way
  mode: "development",
  //Our index file
  entry: "./src/main.js",
  //Where we put the production code
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      //Allows use of modern javascript
      {
        test: /\.js?$/,
        exclude: /node_modules/, //don't test node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      //Allows use of svelte
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
        },
      },
      //Allows use of CSS
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      //Allows use of images
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: "file-loader",
      },
    ],
  },
  //this is what enables users to leave off the extension when importing
  resolve: {
    extensions: [".mjs", ".js", ".svelte"],
  },
  plugins: [
    //Allows to create an index.html in our build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public/img",
          to: "img",
        },
        {
          from: "./public/fonts",
          to: "fonts",
        },
        {
          from: "./public/waves",
          to: "waves",
        },
      ],
    }),
    //This gets all our css and put in a unique file
    new MiniCssExtractPlugin(),
    //take our environment variable in .env file
    //And it does a text replace in the resulting bundle for any instances of process.env.
  ],
  ////Config for webpack-dev-server module
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};
