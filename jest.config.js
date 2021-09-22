const { loadEnvConfig } = require('@next/env')

loadEnvConfig(process.env.PWD)

const config = {
  verbose: true,
}

module.exports = config
