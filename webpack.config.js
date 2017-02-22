const webpack = require('webpack')

module.exports = {
	entry: './source/client/index.js',
	output: {
		filename: './build/client/bundle.js'
	},
	module: {
		rules: [{
			test: /\.sass$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					minimize: true
				}
			}, {
				loader: 'postcss-loader',
				options: {
					plugins: () => [
						require('autoprefixer')
					]
				}
			}, {
				loader: 'sass-loader'
			}]
		}, {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					plugins: [
						[
							"transform-react-jsx", {
								pragma: 'h'
							}
						],
						"transform-runtime"
					],
					presets: [
						[
							"es2015", {
								modules: false
							}
						],
						"stage-3"
					]
				}
			}]
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			},
			DEBUG: JSON.stringify(true)
		}),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false
			}
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
}
