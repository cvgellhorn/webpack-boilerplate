const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = env => {
    return merge(common(env), {
    
        mode: 'production',
    
        devtool: 'source-map',
    
        output: {
            filename: '[name].[contenthash].js'
        },
    
        plugins: [
            new CleanWebpackPlugin()
        ]
    
    });
};
