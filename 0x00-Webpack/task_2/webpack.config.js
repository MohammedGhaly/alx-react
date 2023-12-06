const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./js/dashboard_main.js"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true,
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
};
