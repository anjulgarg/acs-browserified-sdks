const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/common.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'common.js',
        library: 'common',
        libraryTarget: 'var'
    }
}