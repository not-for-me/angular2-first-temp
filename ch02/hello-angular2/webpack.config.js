module.exports = {
    entry: {
        app: "./src/main.ts",
        polyfills: "./src/polyfills.ts"
    },
    output: {
        path: 'dist/',
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' }
        ]
    }
};