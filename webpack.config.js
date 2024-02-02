const HtmlWebpackPlugin = require("html-webpack-plugin");
const { webpack } = require("webpack");

const conf = {
    src: __dirname + '/src',
    dist: __dirname + '/public'
};
 
module.exports = {
    devServer: {
        port: 3000
    },
    mode: 'production',
    entry: [
        conf.src + '/index.js'
        ],
    output: {
        filename: 'bundle.js',
        path: conf.dist
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: conf.src,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                include: conf.src,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                ],
                include: [conf.src]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    externals: {
        maplibregl: 'maplibregl'
    }
};