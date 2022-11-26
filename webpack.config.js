const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const ESLintPlugin = require(`eslint-webpack-plugin`);
const Dotenv = require(`dotenv-webpack`);
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
        test: /\.(png|jpg)$/,
        use:{
          loader: `url-loader`,
          options: {
            // make loader to behave like url-loader, for all svg files
            encoding: `base64`,
          },
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|jpeg)$/i, 
        loader: `file-loader`,
        /* options: {
          publicPath: path.resolve(__dirname, `/public/images`),
          outputPath: `public/images`,
          name: `[name].[ext]`,
          esModule: false
        } */
        options: {
          name: `public/images/[name].[ext]`,
          esModule: false
        }
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
        /* options: {
          data: `$baseUrl: ${process.env.BASE_URL};`
        } */
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
    new ESLintPlugin(),
    new Dotenv(),
  ],
};
