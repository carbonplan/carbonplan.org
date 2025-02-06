import React from 'react'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'theme-ui'
import theme from '@carbonplan/theme'
import '@carbonplan/components/globals.css'
import '@carbonplan/components/fonts.css'

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain='carbonplan.org'
      trackOutboundLinks
      trackFileDownloads
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
