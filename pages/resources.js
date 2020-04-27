import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function Resources (props) {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px' }}>
        <Heading sx={{ my: [5], fontSize: [6] }}>
          Resources
        </Heading>
        <Heading sx={{ my: [3], fontSize: [4] }}>
          Research
        </Heading>
        <Text>
          Browse our datasets, models, primers, and notes.
        </Text>
        <Heading sx={{ my: [3], fontSize: [4] }}>
          Reports
        </Heading>
        <Text>
          View our public database of reports on specific carbon removal projects.
        </Text>
      </Box>
    </Layout>
  )
}

export default Resources