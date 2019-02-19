

const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'main.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules:[
            {
            test: /\.scss$/,
            use: [
                'style-loader', 
                { 
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                }, 
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },            
            ],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        open: true,
        overlay: true,
        port: 3000,
        hot: true,
        contentBase: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'src', 'templates'),
        ],
        watchContentBase: true,
    },

};