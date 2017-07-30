import path from 'path'
import config from '../config/index'
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import express from 'express'
import _debug from 'debug'

const debug = _debug('app:server')
debug('Init express app...')

const app = express()

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack development and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : path.resolve(config.baseDir, config.clientDir),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : 'normal',
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  app.use(express.static(path.resolve(config.baseDir, config.staticDir)))

  // fallback all routes to index.html
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })

  debug('Server is running on DEVELOPMENT mode.')
} else {
  app.use(express.static(path.resolve(config.baseDir, config.distDir), {
    maxage: config.cache_control.max_age
  }))
  debug('Server is running on PRODUCTION mode.')
}

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(err.status).json({
    message: err.message,
    stack: config.env === 'development' ? err.stack : {}
  })
})

module.exports = app
