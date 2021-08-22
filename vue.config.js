const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://kunpeng.csdn.net"
            }
        }
    },
    configureWebpack: require("./webpack.config"),
}