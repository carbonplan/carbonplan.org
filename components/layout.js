import Seo from './seo'
import Header from './header'
import Footer from './footer'
import { Container, Flex, Box, Text } from 'theme-ui'

const Layout = ({ children }) => {
  return (
    <>
      <Seo/>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
        <Box
          sx={{
            width: '100%',
            borderStyle: 'solid', 
            borderColor: 'muted',
            borderWidth: '0px', 
            borderBottomWidth: '1px',
            position: 'sticky', 
            top: 0,
            bg: 'background',
            height: '56px',
            zIndex: 1000
          }}>
          <Container sx={{ 
            px: [4]
          }}>
          <Header/>
          </Container>
        </Box>
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}>
          <Container sx={{ px: [4] }}>
            <Flex sx={{ flexWrap: 'wrap' }}>
              { children }
            </Flex>
          </Container>
        </Box>
        <Box
          sx={{
            width: '100%',
            position: 'sticky',
            bottom: '0px',
            display: ['none', 'none', 'inherit']
          }}>
          <Container sx={{ px: [4] }}>
            <Footer/>
          </Container>
        </Box>
      </Flex>
    </>
  )
}

export default Layout