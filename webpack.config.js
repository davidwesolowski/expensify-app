const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test')
{
    require('dotenv').config({ path: '.env.test' });
}
else if (process.env.NODE_ENV === 'development')
{
    require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) =>
{
    const isProduction = env === 'production';
    const MiniCSSExtract = new MiniCssExtractPlugin({ filename: 'style.css' });
    return {
        entry: './src/app.js',
        output:
        {
            path: path.join(__dirname, 'public/dist'),
            filename: 'bundle.js'
        },
        mode: isProduction ? "production" : "development",
        module:
        {
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use:
                [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:
                        {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    }, 
                    'css-loader', 'sass-loader'
                ],
                test: /\.s?css$/
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer:
        {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
        plugins: [
            MiniCSSExtract,
            new webpack.DefinePlugin(
            {
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_BUCKET': JSON.stringify(process.env.FIREBASE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
            })
        ]
    }; 
};
