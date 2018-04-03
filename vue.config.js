// vue.config.js
const fs = require('fs')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin("[name].css");
module.exports = {
    chainWebpack: config => {
        config.module.rule('css')
            .oneOf('inline')
            .use('url')
            .loader('url-loader')
            .end()
            .end()
            .oneOf('external')
            .resourceQuery(/external/)
            .use('file')
            .loader('file-loader')
    }
}