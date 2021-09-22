const { loadEnvConfig } = require('@next/env')

loadEnvConfig(process.env.PWD)

const config = {
  verbose: true,
  setupFiles: ['./jest.setup.js'],
}

module.exports = config
