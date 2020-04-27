import Layout from '../components/layout'
import Carbon from '../components/carbon'
import { Box, Text, Heading, Link, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'

const link = {
  width: 'fit-content',
  fontSize: [4],
  borderStyle: 'solid',
  borderColor: 'background',
  borderWidth: '0px',
  borderBottomWidth: '1px',
  display: 'block',
  '&:hover': {
    borderColor: 'primary'
  }
}

function Index (props) {
  return (
    <Layout>
      <Grid gap={['12px', '16px', '32px']} columns={[1, null, '400px 1fr']}>
        <Box>
          <Heading sx={{ my: [5], fontSize: [6] }}>
            Data science for carbon removal
          </Heading>
          <Heading sx={{ my: [5], fontSize: [4] }}>
            Improving the transparency and scientific integrity of carbon removal and climate solutions
          </Heading>
          <NextLink href='/about'><Link sx={link}>About</Link></NextLink>
          <NextLink href='/team'><Link sx={link}>Team</Link></NextLink>
          <NextLink href='/reports'><Link sx={link}>Reports</Link></NextLink>
          <NextLink href='/research'><Link sx={link}>Research</Link></NextLink>
        </Box>
        <Box sx={{ display: ['none', 'none', 'inherit'], pr: [4], pt: [5] }}>
          <Carbon></Carbon>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Index