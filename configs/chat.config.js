const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/chat.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'chat.js',
        library: 'chat',
        libraryTarget: 'var'
    }
}