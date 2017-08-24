require('./check-versions')()

process.env.NODE_ENV = 'prodlib'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.lib.conf')

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.buildProdLib.assetsRoot), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: 构建的文件是js库的文件\n' +
      '  因此该库能被引用使用\n'
    ))
  })
})
