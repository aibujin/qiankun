const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            // jsonpFunction: `webpackJsonp_${name}`,  // webpack5不兼容  npm i webpack@4.44.0 可以下载低版本
            globalObject: 'window'
        },
    },
})
