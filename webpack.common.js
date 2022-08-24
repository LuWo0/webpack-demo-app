const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { 
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into common javascript
          "sass-loader", //1. Turns sass into css
        ],
      },
      
      {
        test: /\.html$/i,
        use: ["html-loader"]
      },

      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets"
          }
        }
      }
    ],
  },
};
