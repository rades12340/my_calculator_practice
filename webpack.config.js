const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/app.ts"],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: "head", // insert style tag inside of <head>
              injectType: "singletonStyleTag", // this is for wrap all your style in just one style tag
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
    new HtmlWebpackPlugin({
      favicon: "./favicon.ico",
      template: "./index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".csv"],
  },
};
