import path from "path";

export default {
  mode: 'production',
  entry: './index.js',
  devtool: false,
  optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  output: {
    path: path.join('/data/data/com.termux/files/home/storage/xyz/', 'lib', 'umd'),
    library: "utiliti-js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    filename: 'utiliti-js.production.min.js'
  }
}