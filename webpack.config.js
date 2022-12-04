// webpack.config.js
module.exports = {
    mode: 'development', 
    entry: './src/script.js', // webpack 打包的起始檔案
    output: {
      path: __dirname, // 在這個 config 檔同層的目錄
      filename: 'bundle.js'// 打包輸出的檔名
    }
}