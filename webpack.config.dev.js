const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: 
        './src/index.ts'
    ,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/dist'
    },
    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': true
        }),
    ],
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json']
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: "awesome-typescript-loader" }
        ]
    }
}