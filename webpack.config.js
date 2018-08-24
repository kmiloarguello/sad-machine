const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "babel-polyfill",
        path.resolve("src/index.js")
    ],
    output: {
        filename: "js/bundle-[name].js",
        chunkFilename: "js/bundle-[name].min.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        preset: ["es2015","react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                modules: true,
                                importLoaders: 1
                            }
                        },
                        "postcss-loader"
                    ]
                })
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1000000,
                        name: "img/[hash].[ext]"
                    }
                }
            },
            {
                test: /\.(mp4)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1000000,
                        mimetype: "video/mp4",
                        name: "video/[hash].[ext]"
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, "src/html/index.html"),
            title: "Sad Machine - The Game"
        })
    ]
}