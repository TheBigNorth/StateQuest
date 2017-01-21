module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
	  loaders: [
		{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test : /\.jsx?/,
             exclude: './app',
            loader : 'babel'
        },
	  ]
	},
	watch: true
}
