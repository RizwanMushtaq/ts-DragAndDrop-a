const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts$/, 
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist',
    },
}