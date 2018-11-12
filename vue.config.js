module.exports = {
  configureWebpack: config => {
    config.entry = './src/lib/bury'

    if (process.env.NODE_ENV === 'PLUGIN') {
      config.output.filename = "[name].js"
    }
  }
}