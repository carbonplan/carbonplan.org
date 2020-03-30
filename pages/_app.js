import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'

import theme from '../theme'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <style jsx global>{`
            @font-face {
              font-family: 'LeagueSpartan';
              src: url('/fonts/leaguespartan-bold.ttf');
            }

            @font-face {
              font-family: 'LeagueMonoRegular';
              src: url('/fonts/LeagueMono-Regular.ttf');
            }

            @font-face {
              font-family: 'LeagueMonoBold';
              src: url('/fonts/LeagueMono-Bold.ttf');
            }

            @font-face {
              font-family: 'Fanwood';
              src: url('/fonts/fanwood_text-webfont.ttf');
            }

            @font-face {
              font-family: 'FanwoodItalic';
              src: url('/fonts/fanwood_text_italic-webfont.ttf');
            }
          `}
        </style>
      </ThemeProvider>
    )
  }
}

export default MyApp