const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const AppExtract = new ExtractTextPlugin('app.css')

const APP_DIR = path.resolve(__dirname, 'src/client');
const BUILD_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: ['babel-polyfill', APP_DIR + '/app-starter.jsx'],
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: 'app.min.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      // css

      {
        test: /\.css$/,
        use: AppExtract.extract({
          fallback:'style-loader',
          use:[
          {
            loader: 'css-loader',
            options: {
              minimize: process.env.NODE_ENV === 'production' ? true : false
            }
          },
          {loader: 'autoprefixer-loader?browsers=last 2 versions'},
          ]
        })
      },

      // scss

      {
        test: /\.scss$/,
        use: AppExtract.extract({
          fallback:'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'production' ? true : false
              }
            }, 
            {loader: 'autoprefixer-loader?browsers=last 2 versions'},
            {loader: 'sass-loader'}
          ]
        })
      },

      // fonts
      
      {
        test: /\.(svg|ttf|eot|woff|woff2)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      },

      // images

      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src/client")
    ],
    alias: {
      components: path.resolve(__dirname, 'src/client/components'),
      routes: path.resolve(__dirname, 'src/client/routes'),
      models: path.resolve(__dirname, 'src/client/models'),
      actions: path.resolve(__dirname, 'src/client/models/_actions.register'),
      reducers: path.resolve(__dirname, 'src/client/models/_reducers.register'),
      selectors: path.resolve(__dirname, 'src/client/models/_selectors.register')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'QAD Dashboard',
      hash: true,
      template: APP_DIR + '/app-template.ejs',
      NODE_ENV: process.env.NODE_ENV,
    }),
    new webpack.NamedModulesPlugin(),
    AppExtract
    // prints more readable module names in the browser console on HMR updates
  ]
};


if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    )
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    )
} else {
    const clientCfg = JSON.parse(fs.readFileSync("./config/client.json"));
    config.devtool = "source-map"
    config.devServer = {
      compress: true,
      historyApiFallback: true,
    }
    config.plugins.push(new webpack.DefinePlugin({
      'config': JSON.stringify(clientCfg),
    }));
}

module.exports = config;
