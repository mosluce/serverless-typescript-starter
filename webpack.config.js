'use strict';

const webpack = require('webpack');
const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
    entry: {
        'functions/sample': path.join(__dirname, 'functions/sample/index.ts')
    },

    externals: [externals()],

    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack')
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    target: 'node'
};