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
    path: path.resolve(process.cwd(), 'lib', 'umd'),
    library: "UtilitiJs",
    libraryTarget: "umd",
    umdNamedDefine: true,
    filename: 'utiliti-js.production.min.js'
  }
}
