import { ThemeProvider } from 'theme-ui'
import theme from '@carbonplan/theme'
import '@carbonplan/components/globals.css'
import '@carbonplan/components/fonts.css'
import CommandMenu from '../components/command-menu'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CommandMenu />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
