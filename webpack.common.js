const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirStyles = path.join(__dirname, 'styles');
const dirAssets = path.join(__dirname, 'assets');

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
                dirStyles,
                dirAssets
            ]
        },

        plugins: [
            new webpack.DefinePlugin({ IS_DEV }),

            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'index.ejs'),
                title: 'Webpack Boilerplate'
            }),

            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        [
                            'imagemin-svgo',
                            {
                                plugins: [
                                    // SVGO options: "https://github.com/svg/svgo#what-it-can-do"
                                    {
                                        removeViewBox: false,
                                        removeXMLNS: true
                                    }
                                ]
                            }
                        ]
                    ]
                }
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

                // STYLES
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: IS_DEV
                            }
                        },
                    ]
                },

                // CSS / SASS
                {
                    test: /\.scss/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: IS_DEV
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: IS_DEV,
                                sassOptions: {
                                    includePaths: [dirAssets]
                                }
                            }
                        }
                    ]
                },

                // IMAGES
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                },

                // SVG
                {
                    test: /\.svg$/,
                    use: [
                        'raw-loader'
                    ]
                }
            ]
        },

        optimization: {
            runtimeChunk: 'single'
        }

    };
};
