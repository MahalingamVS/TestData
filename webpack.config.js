var path = require('path');

module.exports = {
    mode: 'production',
    entry: './lib/BoilerplateComponent.js',
    output: {
        path: path.resolve('lib'),
        filename: 'BoilerplateComponent.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}