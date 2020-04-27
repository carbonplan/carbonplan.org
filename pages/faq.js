import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function FAQ (props) {
  return (
    <Layout>
      <Box>
      <Heading sx={{ my: [5], fontSize: [6] }}>
        FAQ
      </Heading>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        How are you funded?
      </Heading>
      <Text>
        Browse our datasets, models, primers, and notes.
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Who designed this website?
      </Heading>
      <Text>
        We collaborated with an incredible firm called Cast Iron Design.
      </Text>
      </Box>
    </Layout>
  )
}

export default FAQ