const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const ESLintPlugin = require(`eslint-webpack-plugin`);
module.exports = {
  mode: `development`,
  entry: `./src/index.tsx`,
  devtool: `inline-source-map`,
  output: {
    path: path.join(__dirname, `/dist`),
    filename: `bundle.js`,
    publicPath: `/`
  },
  devServer: {
    static: `./dist`,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
      },
      {
        test: /\.tsx?$/,
        use: `ts-loader`,
        exclude: /node_modules/,
      },
      {
        test: /\.svg/,
        use: {
          loader: `svg-url-loader`,
          options: {
            // make loader to behave like url-loader, for all svg files
            encoding: `base64`,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          `style-loader`,
          // Translates CSS into CommonJS
          `css-loader`,
          // Compiles Sass to CSS
          `sass-loader`,
        ],
      },
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`]
      },
    ],
  },
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
    }),
    new ESLintPlugin()
  ],
};
