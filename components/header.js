/** @jsx jsx */
import { Flex, Box } from 'theme-ui'
import Link from 'next/link'
import { jsx } from 'theme-ui'

const Header = () => {
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
        <Link href='/'>
          <a sx={{variant: 'text.link', fontSize: [2], fontWeight: 'bold'}}>CarbonPlan</a>
        </Link>
        <Box>
          <Link href='/about'>
            <a sx={{variant: 'text.link', fontSize: [2], mx: [2], fontWeight: 'bold'}}>About</a>
          </Link>
          <Link href='/team'>
            <a sx={{variant: 'text.link', fontSize: [2], mx: [2], fontWeight: 'bold'}}>Team</a>
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
