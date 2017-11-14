/**
 * Author johnnyZhang
 * Site johnnyzhang.cn
 * CreateTime 2017/11/13.
 */
var webpack=require('webpack');

module.exports = {
    entry: "./hello.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('webpack 实例')
    ]
};