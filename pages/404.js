import Layout from '../components/layout'
import { Box, Text, Heading, Grid } from 'theme-ui'
import PoopHappy from '../components/emoji/poop-happy'

const Custom404 = () => {
  return (
    <Layout hideFooter={true}>
      <Grid
        gap={['12px', '16px', '16px']}
        columns={[1, null, '450px 1fr']}
        sx={{ mb: [5, 0, 0], width: '100%', paddingTop: '70px' }}
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
            Oops!{' '}
          </Heading>
          <Heading
            sx={{
              my: [4, 5, 5],
              fontSize: [3, 4, 4],
              fontFamily: 'body',
              lineHeight: 1.25,
            }}
          >
            Sorry but we can't seem to find the page you are looking for.
          </Heading>
          <Text
            sx={{
              color: 'secondary',
              fontFamily: 'monospace',
              letterSpacing: 'monospace',
            }}
          >
            ERROR CODE 404
          </Text>
        </Box>
        <Box sx={{ 
          display: ['none', 'none', 'inherit'], 
          width: '500px', 
          pr: [4], 
          pt: [5],
          fill: 'primary' 
        }}>
          <PoopHappy/>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Custom404
