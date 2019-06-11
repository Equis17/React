const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './React之简介/03React之使用构造函数生成DOM.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [ // 插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './React之简介/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000' },
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
