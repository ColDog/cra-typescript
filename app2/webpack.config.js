module.exports = {
  entry: {
    app: ["./src/entry.ts"],
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  module: {
    rules: [
      // babel-loader for pure javascript (es6) => javascript (es5)
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        exclude: [],
        include: [],
      }
    ]
  },
  plugins: [],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  }
};
