const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  experimental: {
    scrollRestoration: true,
  },
})
