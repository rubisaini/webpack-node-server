/**
 * Created by intelligrape on 3/5/17.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = {
    entry : './src/main.js' ,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './src/index.js',
        publicPath: '/abc'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ]

};

module.exports = config;