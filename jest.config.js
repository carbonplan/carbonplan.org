const { loadEnvConfig } = require('@next/env')

loadEnvConfig(process.env.PWD)

const config = {
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
}

module.exports = config
