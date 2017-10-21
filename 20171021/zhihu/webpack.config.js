var option = {
    entry: {
        index: './src/index/main.js'
    },
    output: {
        path: './build',
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.css', '.vue'],
        alias: {
            'vux-components': 'vux/src/components/'
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /vux.src.*?js$/,
            loader: 'babel'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
        }]
    }
};

if (process.env.NODE_ENV == 'production') {
    option.devtool = false;
}

module.exports = option;