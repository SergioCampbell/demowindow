import path from 'path';
import HtmlWebackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

exports.module = {
    mode: 'development',
    entry:  './src/main.tsx',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'json'],
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/images/'),
            '@styles': path.resolve(__dirname, 'src/'),
            '@utils': path.resolve(__dirname, 'src/utils/')
        }
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename:  'assets/images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                'css-loader']
            },
            {
                test: /\.png|svg|jpg/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        name: '[name].[contenthash].[ext]',
                        outputPath: './assets/fonts/',
                        publicPath: './assets/font/',
                        esModule: false
                    }
                }
            },
            {
                test: /\.json$/,
                    loader: [
                        'json-loader'
                    ]
            }
        ]
    },
        plugins: [
            new HtmlWebackPlugin({
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'assets/[name].[contenthash].css'
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'assets'),
                        to: 'assets'
                    }
                ]
            }),
            new Dotenv(),
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            historyApiFallback: true,
            port: 3030,
        }
    }

