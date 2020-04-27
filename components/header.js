import { Box, Flex, MenuButton, Link, Image } from 'theme-ui'
import Logo from './logo'

const Header = () => {
  return <Flex
    sx={{
      margin: '0 auto',
      width: '100%',
      justifyContent: 'space-between',
      pt: ['12px'],
      pb: [3]
    }}
  >
    <Box sx={{ fontSize: [3] }}>
      <Logo></Logo>
    </Box>
    <Box>
      <MenuButton aria-label='Toggle Menu' />
    </Box>
  </Flex>
}

export default Header