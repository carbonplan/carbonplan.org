import { Box, Text, Styled, Link, Grid, Container } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout } from '@carbonplan/components'
import Splash from '../components/splash'

const sx = {
  nav: {
    width: 'fit-content',
    color: 'text',
    fontSize: [4],
    pb: ['2px'],
    borderStyle: 'solid',
    borderColor: 'primary',
    borderWidth: '0px',
    borderBottomWidth: '1px',
    textDecoration: 'none',
    display: 'block',
    '&:hover': {
      color: 'secondary',
      borderBottomWidth: '1px',
      borderColor: 'secondary',
    },
  },
}

function Index() {
  return (
    <Layout links={'homepage'} footer={false}>
      <Grid
        gap={['12px', '16px', '100px']}
        columns={[1, null, '480px 1fr']}
        sx={{ mb: [5, 0, 0], width: '100%' }}
      >
        <Box>
          <Text as='h1' variant='styles.h1' sx={{mt: [4, 5, 5]}}>Data and science for carbon removal</Text>
          <Box sx={{ mb: [4, 5, 5] }}>
            <Text as='h2' variant='styles.h3' sx={{ fontSize: [3, 4, 4] }}>
              Improving the transparency and scientific integrity of carbon
              removal and climate solutions through open data and tools
            </Text>
          </Box>
          <NextLink href='/about'>
            <a>
              <Text sx={sx.nav}>About</Text>
            </a>
          </NextLink>
          <Link sx={sx.nav} href='/reports'>
            Reports
          </Link>
          <Link sx={sx.nav} href='/research'>
            Research
          </Link>
          <NextLink href='/team'>
            <a>
              <Text sx={sx.nav}>Team</Text>
            </a>
          </NextLink>
          <NextLink href='/faq'>
            <a>
              <Text sx={sx.nav}>FAQ</Text>
            </a>
          </NextLink>
        </Box>
        <Box sx={{ display: ['none', 'none', 'inherit'], pr: [4], pt: [5] }}>
          <Splash />
        </Box>
      </Grid>
    </Layout>
  )
}

export default Index
