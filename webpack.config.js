const path = require('path')

module.exports = {
    // Define multiple entry points
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',  // Output file name pattern using the entry point name
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        port: 3010,
        static: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
        },
      ]
    }
}