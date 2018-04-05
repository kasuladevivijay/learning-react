// Webpack configuration
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules: [
			{ test: /\.js$/, 
				use: 'babel-loader', 
				exclude: /node_modules/
			}
		]
	},
	'devtool': 'cheap-module-eval-source-map',
	'devServer': {
		contentBase: path.join(__dirname, 'public')
	}
};