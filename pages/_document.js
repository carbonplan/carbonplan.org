import Document, { Html, Main, NextScript, Head } from 'next/document'
import { Tracking, CustomScrollbar } from '@carbonplan/components'
import { InitializeColorMode } from 'theme-ui'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='no-focus-outline'>
        <Head>
          <Tracking />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
          <CustomScrollbar />
        </body>
      </Html>
    )
  }
}

export default MyDocument
