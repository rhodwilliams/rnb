// https://github.com/dimaip/server-side-rendering/commit/6e36b9690816d414ca36775c6487e0b6dbd8abe3

var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;
var AssetsPlugin = require('assets-webpack-plugin');
var baseConfig = require('./webpack.config.base');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');


module.exports = {
    context: SRC_DIR,
    entry: path.resolve(SRC_DIR, 'server.js'),

    output: {
        filename: 'dist/server.js',
        chunkFilename: 'server.[name].js',
        libraryTarget: 'commonjs2',
        publicPath: '/static/'
    },

    module: {
        loaders: [
            baseConfig.babelLoader,
            baseConfig.jsonLoader,
            baseConfig.txtLoader,
            baseConfig.css.loader.server.prod,
            baseConfig.asset.server.image
        ]
    },

    postcss: baseConfig.css.postcss,

    resolve: {
        root: SRC_DIR,
        modulesDirectories: ['node_modules']
    },
    target: "node",
    devtool: 'source-map'
};
