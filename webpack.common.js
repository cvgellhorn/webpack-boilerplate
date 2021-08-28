const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');

/**
 * Webpack Configuration
 */
module.exports = env => {
    // Is the current build a development build
    const IS_DEV = !!env.dev;

    return {

        entry: {
            main: path.join(dirApp, 'index')
        },

        resolve: {
            modules: [
                dirNode,
                dirApp,
            ]
        },

        plugins: [
            new webpack.DefinePlugin({ IS_DEV }),

            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'public/index.html'),
                title: 'Webpack Boilerplate'
            })
        ],

        module: {
            rules: [
                // BABEL
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            compact: true
                        }
                    }
                },
            ]
        },

        optimization: {
            runtimeChunk: 'single'
        }

    };
};
