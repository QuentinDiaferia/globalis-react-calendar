var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var SRC_DIR = path.resolve(__dirname, 'src')
var ASSETS_DIR = path.resolve(__dirname, 'assets')
var PUBLIC_DIR = path.resolve(__dirname, 'public')

module.exports = {
    entry: [
        SRC_DIR + '/index.js',
        ASSETS_DIR + '/styles/globalis-react-calendar.scss'
    ],
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'assets'),
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015'],
                    plugins: ['syntax-dynamic-import']
                }
            },
            {
                test: /\.scss$/,
                include: ASSETS_DIR + '/styles',
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
    }
}
