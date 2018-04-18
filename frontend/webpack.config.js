
const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const localIp = require('get-my-local-ip');
// const { JSDOM } = require('jsdom');

// const autoprefixer = require('autoprefixer')
const purify = require('purifycss-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || 'development'
const NODE_TEST = process.env.NODE_TEST === 'true'
const isDEVELOP = NODE_ENV === 'development'
const GENERAL_PATH = 'public/'
const BUILD_FOLDER = 'dist/'
const PROTOCOL = 'https'
const HOST = process.env.NODE_LOCAL_NETWORK === 'true' ? localIp.address : 'localhost' //localIp.address - for testing mobile devise IN LOCAL NETWORK
const PORT = 3001;
const ROOT_URL = isDEVELOP && !NODE_TEST ? `${PROTOCOL}://${HOST}:${PORT}/` : '/'
const CURRENT_DIR = __dirname.slice(0, -('frontend'.length))


const WEBPACK_UTILS = [
    'babel-polyfill',
    'react-hot-loader/patch',
    `webpack-dev-server/client?${ROOT_URL}`,
    'webpack/hot/only-dev-server',
]

const extractCSS = new ExtractTextPlugin({
    filename: 'css/bundle.css',
    disable: isDEVELOP && !NODE_TEST,
    allChunks: true,
});

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.tpl.html',
    filename: 'index.html',
    // favicon: './app/assets/images/favicon.png',
    inject: 'body',
    hash: true,
})

const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    minimize: true,
    sourceMap: false,
    output: {
        comments: false,
    },
})

const plugins = [
    new CopyWebpackPlugin([
        // { from: './app/assets/images/favicons', to: path.resolve(__dirname.replace('frontend', ''), `${GENERAL_PATH + BUILD_FOLDER}favicons`) },
    ]),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        PRODUCTION: JSON.stringify(!isDEVELOP),
        ROOT_URL: JSON.stringify(ROOT_URL),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'js/vendor.bundle.js',
        minChunks: Infinity,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    extractCSS,
    new purify({
        basePath: ROOT_URL,
        paths: [
            resolve(CURRENT_DIR, 'public'),
        ],
        purifyOptions: {
            minify: !isDEVELOP,
        },
    }),
    HtmlWebpackPluginConfig,
]

if (!isDEVELOP) {
    plugins.push(UglifyJsPlugin)
}

const config = {
    devtool: isDEVELOP ? 'inline-source-map' : 'source-map',
    //watch: isDEVELOP,
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
        modules: ['node_modules'],
        alias: {},
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{ loader: 'css-loader' }],
                }),
            },
            {
                test: /\.scss$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap',
                        {
                            loader: 'sass-loader?sourceMap?',
                            // options: { 'url': true },
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: ['./app/styles/variables.scss', './app/styles/mixins.scss'],
                            },
                        },
                    ],

                }),
            },
            {
                test: /\.(gif|jpg|png|ico|svg)/i,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: `${''}[path][name].[ext]`,
                },
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    mimetype: 'application/font-woff',
                    name: `${''}[path][name].[ext]`,
                },
            },
            {
                test: /\.(ttf|eot|svg|mp3|otf|ttc)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: `${''}[path][name].[ext]`,
                },
            },
            {
                test: /\.json$/, loader: 'json-loader',
            },
        ],
    },
    plugins,
    devServer: {
        hot: true,
        inline: true,
        host: HOST,
        https: true,
        useLocalIp: process.env.LOCAL_NETWORK === 'true', //true - for testing mobile in local network(wi-fi)
        port: PORT,
        publicPath: ROOT_URL + BUILD_FOLDER,
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: {
            '/api': `http://${HOST}:8080/`,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        },
        watchOptions: {
            ignored: '/node_modules/',
            poll: true,
        },
    },
};

const mainConfig = Object.assign(
    {},
    config,
    {
        name: 'main',
        entry: {
            'bundle.js': ['./app/index.jsx', ...(isDEVELOP && !NODE_TEST ? WEBPACK_UTILS : [])],
        },
        output: {
            filename: 'js/[name]',
            path: resolve(CURRENT_DIR, GENERAL_PATH + BUILD_FOLDER),
            publicPath: ROOT_URL + BUILD_FOLDER,
            sourceMapFilename: '[name].js.map',
            chunkFilename: 'js/chunks/[name].js',
        },
    },
)

module.exports = [
    mainConfig,
]

