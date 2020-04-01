/** @jsx jsx */
import { Flex, Box, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { jsx, useColorMode } from 'theme-ui'

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Box>
      <Flex
        sx={{
          margin: '0 auto',
          width: '100%',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
          justifyContent: 'space-between',
          mt: [1]
        }}
      >
        <NextLink href='/'><Link variant='nav'>CarbonPlan</Link></NextLink>
        <Box>
          <Link 
            variant='nav'
            onClick={e => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default')
            }}
            sx={{
              mx: [2], 
              borderColor: 'primary', borderWidth: [2], borderStyle: 'solid', p: [2], pb: [1]}}
            >
            {colorMode === 'default' ? 'Dark' : 'Light'}
          </Link>
          <NextLink href='/about'><Link variant='nav' sx={{mx: [2]}}>About</Link></NextLink>
          <NextLink href='/team'><Link variant='nav' sx={{mx: [2]}}>Team</Link></NextLink>
          <NextLink href='/values'><Link variant='nav' sx={{mx: [2]}}>Values</Link></NextLink>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header