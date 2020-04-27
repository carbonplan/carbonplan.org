import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function FAQ (props) {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px' }}>
      <Heading sx={{ my: [5], fontSize: [6] }}>
        FAQ
      </Heading>
      <Box sx={{ my: [4] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          How are you funded?
        </Heading>
        <Text>
          Our current funding comes from a Carbon180 Entrepreneur in Residence Fellowship and 
          individual donations. Some grants and donations are pending.
        </Text>
      </Box>
      <Box sx={{ my: [4] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          How do you structure engagements?
        </Heading>
        <Text>
          Good question...
        </Text>
      </Box>
      <Box sx={{ my: [4] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          Who designed this website?
        </Heading>
        <Text>
          We've been working with Cast Iron Design. They are incredible. They developed the brand
          and design system and we've been collaborating on the site design and implementation. 
          Talk to them about your next project. Seriously.
        </Text>
      </Box>
      </Box>
    </Layout>
  )
}

export default FAQ