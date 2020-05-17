import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function FAQ () {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px', mb: [6] }}>
      <Heading sx={{ my: [4, 4, 5], fontSize: [6, 7, 7] }}>
        Terms
      </Heading>
      <Text sx={{ fontSize: [3], mb: [3] }}>
        All code powering this website is MIT licensed 
        and available on <Link href='https://github.com/carbonplan'>Github</Link>.
      </Text>
      <Text sx={{ fontSize: [3], mb: [3] }}>
        Consistent with our charitable mission to build open tools and 
        resources for the evaluation and deployment of carbon removal 
        and other climate solutions, we aim to release models and datasets 
        under maximally permissive licenses.
      </Text>
      <Text sx={{ fontSize: [3], mb: [3] }}>
        We do request that you please provide attribution if 
        reusing any of our digital content (graphics, logo, data, articles, etc.).
      </Text>

      <Text sx={{ fontSize: [3], mb: [3] }}>
        Some of the data made available on parts of this 
        website or through our APIs, such as our project reports,
        is sourced from content made available under a CC-BY license. 
        We include attribution for this content, and we please request that you also 
        maintain that attribution if using this data.
      </Text>
      <Text sx={{ fontSize: [3], mb: [3] }}>
        We're just getting started and may change some of these terms in the future. 
        Please check back here for updates.
      </Text>
      </Box>
    </Layout>
  )
}

export default FAQ





