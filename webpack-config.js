let webpack = require('webpack');
let path = require('path');

let config = {
    entry: path.resolve(__dirname, 'src/app/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'src/app/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: path.resolve(__dirname,'src'),
            loader: 'babel-loader'

        }]
    }
};

module.exports = config;