const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/calling.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'calling.js',
        library: 'calling',
        libraryTarget: 'var'
    }
}