var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.css$/, exclude: /node_modules/, loader: ['style-loader', 'css-loader']}
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },

    target: 'web'
}
