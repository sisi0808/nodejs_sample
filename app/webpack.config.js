const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // エントリポイントを設定（依存の大本となるファイル）
  entry: './src/app.js',

  // エンドポイント（出力ファイル）を設定
  output: {
    path: `${__dirname}/dist`,
    filename: 'server.js'
  },

  // nodejs,expressでエラーが出ないようにする設定
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express

  // モードを選択　ここでは圧縮を行わない設定
  mode: "development",

  // watchモードを設定（差分が出たらコンパイルしてくれる）
  watch: true,
}