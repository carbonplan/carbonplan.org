import Layout from '../components/layout'
import { Box, Text, Heading, Grid } from 'theme-ui'

function Custom404() {
  return (
    <Layout hideFooter={true}>
      <Grid
        gap={['12px', '16px', '100px']}
        columns={[1, null, '480px 1fr']}
        sx={{ mb: [5, 0, 0], width: '50%', padding: '70px' }}
      >
        <Box>
          <Heading
            as='h1'
            sx={{
              my: [4, 5, 5],
              letterSpacing: 'heading',
              fontSize: [6, 7, 7],
            }}
          >
            {' '}
            Ooops!{' '}
          </Heading>
          <Heading
            sx={{
              my: [4, 5, 5],
              fontSize: [3, 4, 4],
              fontFamily: 'body',
              lineHeight: 1.25,
            }}
          >
            We can't seem to find the page you are looking for.
          </Heading>
          <Text
            sx={{
              color: 'secondary',
              fontFamily: 'monospace',
              letterSpacing: 'monospace',
            }}
          >
            Error code: 404
          </Text>
        </Box>
        <Box>
          <Text
            sx={{
              fontSize: 180,
            }}
          >
            💩
          </Text>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Custom404
