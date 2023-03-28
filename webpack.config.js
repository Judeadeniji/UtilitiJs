import path from "path";

export default {
  mode: 'development',
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
    library: "UtilitiJs",
    libraryTarget: "umd",
    umdNamedDefine: true,
    filename: 'utiliti-js.development.js'
  }
}