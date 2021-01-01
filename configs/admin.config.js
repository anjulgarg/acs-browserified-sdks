const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/admin.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'admin.js',
        library: 'admin',
        libraryTarget: 'var'
    },
}