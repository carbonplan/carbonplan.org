import Monogram from './monogram'
import { Box, Text, Grid, Link } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { default as NextLink } from 'next/link'

const Footer = () => {
  return (
    <Box
      sx={{
        mt: [4],
        pt: [4],
        mb: [4, 0, 0],
      }}
    >
      <Grid columns={[1, 1, 3]} sx={{ mb: [4] }}>
        <Box>
          <Text sx={{ fontFamily: 'heading', letterSpacing: 'wide', mb: [2] }}>
            EMAIL
          </Text>
          <Link
            href='mailto:hello@carbonplan.org'
            sx={{ textDecoration: 'none' }}
          >
            hello@carbonplan.org
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontFamily: 'heading', letterSpacing: 'wide', mb: [2] }}>
            FOLLOW
          </Text>
          <Link
            href='https://twitter.com/carbonplanorg'
            sx={{ textDecoration: 'none' }}
          >
            @carbonplanorg
          </Link>
        </Box>
        <Box sx={{ fontFamily: 'body', letterSpacing: 'body' }}>
          <Text sx={{ color: 'secondary' }}>
            CarbonPlan is a registered non-profit public benefit corporation in 
            California <br/>with 501(3)(c) status.
          </Text>
        </Box>
      </Grid>
      <Grid columns={[1, 1, 3]}>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              fontFamily: 'monospace',
              position: 'absolute',
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              color: 'secondary',
              fontSize: [1],
              pt: [2],
              display: ['none', 'none', 'inherit'],
            }}
          >
            <Text>(c) 2020 CARBONPLAN, SAN FRANCISCO, CA</Text>
          </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              fontFamily: 'monospace',
              position: 'absolute',
              bottom: '0px',
              borderStyle: 'solid',
              borderColor: 'muted',
              borderWidth: '0px',
              borderTopWidth: '1px',
              color: 'secondary',
              fontSize: [1],
              pt: [2],
              display: ['none', 'none', 'inherit'],
            }}
          >
            <Text>
              <NextLink href='/terms'>
                <a>
                  <Text sx={{ color: 'secondary' }}>READ OUR TERMS</Text>
                </a>
              </NextLink>
            </Text>
          </Box>
        </Box>
        <Box>
          <Monogram />
        </Box>
      </Grid>
    </Box>
  )
}

export default Footer
