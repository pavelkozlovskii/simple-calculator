const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production", // "development" для разработки
  entry: "./src/index.js", // Главный JS-файл
  output: {
    filename: "bundle.js", // Имя итогового JS-файла
    path: path.resolve(__dirname, "public"), // Куда сохранять
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Подключаем CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Очищает dist перед билдом
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Шаблон HTML
      minify: {
        collapseWhitespace: true, // Минификация HTML
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()], // Минификация JS
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000, // Сервер на http://localhost:3000
    open: true,
  },
};
