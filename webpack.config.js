const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions. 
        extensions: [".ts", ".tsx", ".js", ".json"]
    }, module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.    
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.     
            {
                enforce: "pre",
                test: /\.js$/, loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.scss$/,
                include: /fonts/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            sourceMap: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader'                        
                    }
                ]
            }           
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'website',
            template: path.resolve('index.html')
        }),       
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    // When importing a module whose path matches one of the following, just assume a corresponding global 
    // variable exists and use that instead. This is important because it allows us to avoid bundling all 
    // of our dependencies, which allows browsers to cache those libraries between builds 
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}; 