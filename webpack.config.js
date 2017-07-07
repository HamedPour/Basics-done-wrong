const path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/build/scripts"),
    filename: "[name].js" //[name] keeps the final name dynamtic so you dont have to worry
  },
  module: {
    loaders: [
      {
        loader:'babel-loader',
        query: {
          presets: [require.resolve('babel-preset-es2015')]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
