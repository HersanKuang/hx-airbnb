const path = require('path')
const CracoLessPlugin = require('craco-less')

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  // webpack
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}

export {}
