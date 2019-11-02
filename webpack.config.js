const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) =>
{
    const isProduction = env === 'production';
    const MiniCSSExtract = new MiniCssExtractPlugin({ filename: 'style.css' });
    return {
        entry: './src/app.js',
        output:
        {
            path: path.join(__dirname, 'public'),
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
            historyApiFallback: true
        },
        plugins: [MiniCSSExtract]
    }; 
};
