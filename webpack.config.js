const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    devtool: 'source-map',
    entry: './src/ko-todo.module.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                use: ['url-loader']
            },
            {
                test: /\.html/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('site.css')
    ]
};

module.exports = config;
