import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function FAQ () {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px' }}>
      <Heading sx={{ my: [5], fontSize: [7] }}>
        FAQ
      </Heading>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          Are you a nonprofit?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Yes. We are a registered non-profit public benefit corporation in California. Our 501(3)(c) status is pending.
        </Text>
      </Box>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          Why are you a nonprofit?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Because our commitment and responsability is completely to the climate and to the public, not to shareholders.
        </Text>
      </Box>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          How are you funded?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Our immediate funding comes from a Carbon180 Entrepreneur in Residence Fellowship and 
          the generosity of individual donations. Some grants and donations are pending. If you are interested
          in supporting our work, please reach out to{' '}
          <Link sx={{ pb: [1] }} href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>.
        </Text>
      </Box>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          Are you a verifier?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          There are several organizations currently acting as third-party verifiers
          in the space of carbon removal and carbon offsets. We are different, and aim to complement them. 
          We do project and technology evaluation, but our focus is understanding, 
          quantifying, and clarifying the underlying data and scientific integrity, and helping guide
          future procurement and deployment. Especially in the the case of proprietary 
          industrial processes, we still see a critical role for third-party verfiers
          so long as they act with neutrality and transparency.
        </Text>
      </Box>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          Who designed this website?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
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