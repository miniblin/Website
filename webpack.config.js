const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: ['babel-polyfill', path.resolve('src/index.tsx')],
   output: {
       filename: 'index.js',
       path: path.resolve('build')
   },
   devtool: 'inline-source-map',
   resolve: {
       modules: [path.resolve('src'), 'node_modules'],
       extensions: ['.ts', '.tsx', '.js']
   },
   module: {
       rules: [
           {
               test: /\.tsx?$/,
               use: [
                   {
                       loader: 'awesome-typescript-loader'
                   }
               ]
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
                       loader: 'sass-loader',                        
                   }
               ]
           } ,
           {
            test: /\.png(\?.*)?$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[hash].[ext]'
                }
            }
        }        
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           title: 'Digiterre React Project Template',
           template: path.resolve('./src/index.html')
       })            
   ],
   devServer: {      
       inline: true,
       historyApiFallback: true
   }
};