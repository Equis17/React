const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const extractTextPlugin=require('extract-text-webpack-plugin')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: {
        app: path.join(__dirname, './src/main.js'),
        vendors: ['jquery'],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [ // 插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhiteSpace:true,
                removeComments:true
            }
        }),
        new cleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { // 配置压缩选项
                warnings: false // 移除警告
            }
        }),
        new webpack.optimize.DedupePlugin({ // 设置为产品上线环境，进一步压缩JS代码
            'process.env.NODE_ENV': '"production"'
        }),
        new extractTextPlugin('style.css'),
        new optimizeCssAssetsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
                })
            },
            {
                test: /\.scss$/, use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../' // 指定抽取的时候，自动为我们的路径加上 ../ 前缀
                })
            },
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
