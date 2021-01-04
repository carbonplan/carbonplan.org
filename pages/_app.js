import { ThemeProvider } from 'theme-ui'
import { Fonts, Globals } from '@carbonplan/components'
import theme from '@carbonplan/theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Fonts />
      <Globals />
    </ThemeProvider>
  )
}
