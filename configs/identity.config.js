const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/identity.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'identity.js',
        library: 'identity',
        libraryTarget: 'var'
    },
}