const path = require('path')

module.exports = {
  // less
  // webpack
  webpack: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
}
