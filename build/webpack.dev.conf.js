'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const housemaid = require('superagent')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before(app) {
      app.get('/api/live1', (req, res) => {
          housemaid
            .get('http://data.live.126.net/livechannel/previewlist.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/more', (req, res) => {
          housemaid
            .get('http://data.live.126.net/livechannel/previewlist/2.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/live2', (req, res) => {
          housemaid
            .get('http://data.live.126.net/liveAll/102093.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/live3', (req, res) => {
          housemaid
            .get('http://data.live.126.net/liveAll/103226.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/classifyNav', (req, res) => {
          housemaid
            .get('http://data.live.126.net/livechannel/classifylist.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/classifyLive1', (req, res) => {
          housemaid
            .get('http://data.live.126.net/livechannel/classify/3/1.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/classifyLive2', (req, res) => {
          housemaid
            .get('http://data.live.126.net/livechannel/classify/5/1.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/take1', (req, res) => {
          housemaid
            .get('http://data.live.126.net/livechannel/sub/1.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/take2', (req, res) => {
          housemaid
            .get('http://data.live.126.net/livechannel/sub/3.json')
            .end((err, result) => {
              res.json(result)
            })
        }),
        app.get('/api/take3', (req, res) => {
          housemaid
            .get('http://data.live.126.net/livechannel/sub/9.json')
            .end((err, result) => {
              res.json(result)
            })
        })
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ?
          utils.createNotifierCallback() : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
