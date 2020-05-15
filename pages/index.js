import Layout from '../components/layout'
import Splash from '../components/splash'
import { Box, Text, Heading, Link, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'

const link = {
  width: 'fit-content',
  color: 'text',
  fontSize: [4],
  pb: [0],
  borderStyle: 'solid',
  borderColor: 'primary',
  borderWidth: '0px',
  borderBottomWidth: '1px',
  textDecoration: 'none',
  display: 'block',
  '&:hover': {
    color: 'secondary',
    borderBottomWidth: '1px',
    borderColor: 'secondary'
  }
}

function Index () {
  return (
    <Layout hideFooter={true}>
      <Grid 
        gap={['12px', '16px', '100px']} 
        columns={[1, null, '480px 1fr']}
        sx={{ mb: [5, 0, 0] }}
      >
        <Box>
          <Heading sx={{ my: [4, 4, 5], letterSpacing: 'heading', fontSize: [7] }}>
            Data and science for carbon removal
          </Heading>
          <Heading sx={{ my: [4, 4, 5], fontSize: [4], fontFamily: 'body', lineHeight: 1.25 }}>
            Improving the transparency and scientific integrity of carbon removal 
            and climate solutions through open data and tools
          </Heading>
          <NextLink href='/about'><a><Text sx={link}>About</Text></a></NextLink>
          <NextLink href='/team'><a><Text sx={link}>Team</Text></a></NextLink>
          <Link sx={link} href='/research'>Research</Link>
          <Link sx={link} href='/reports'>Reports</Link>
          <NextLink href='/faq'><a><Text sx={link}>FAQ</Text></a></NextLink>
        </Box>
        <Box sx={{ display: ['none', 'none', 'inherit'], pr: [4], pt: [5] }}>
          <Splash/>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Index