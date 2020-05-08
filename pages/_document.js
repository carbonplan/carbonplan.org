import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

class MyDocument extends Document {
  static async getStaticProps(ctx) {
    const staticProps = await Document.getStaticProps(ctx)
    return { ...staticProps }
  }

  render() {
    return (
      <Html className='no-focus-outline'>
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument