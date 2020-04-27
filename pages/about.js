import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function About (props) {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px' }}>
      <Heading sx={{ my: [5], fontSize: [6] }}>
        About
      </Heading>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Mission
      </Heading>
      <Text>
        We analyze carbon removal opportunities based on the best available science and data.
        We help companies, governments, non-profits, and the public make specific decisions towards carbon removal goals.
        We work collaboratively with the scientific community to build open tools and 
        resources for the evaluation and deployment of carbon removal and other climate solutions.
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Our work
      </Heading>
       <Heading sx={{ my: [3], fontSize: [4] }}>
        1
      </Heading>
      <Text sx={{ mb: [2] }}>
        We engage with companies, non-profits, and government organizations to help
        analyze climate programs and projects. A core focus in these engagements is transparency
        and aggregation of information: by making the output of our analyses public, we
        hope to prevent duplication of effort and bring standards and shared concepts to complex technical problems.
      </Text>
      <Text>
        Browse our <NextLink href='/reports'><Link>reports</Link></NextLink>
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        2
      </Heading>
      <Text sx={{ mb: [2] }}>
        We collaborate with academic researchers to build open source data and tools
        for carbon removal and climate solutions. Examples include statistical models for forest carbon
        quantification and wildfire risk estimation, methods for costing and siting direct air capture facilities,
        and data science and economics around carbon accounting. Through this work we produce datasets, models, primers, and notes.
      </Text>
      <Text>
        Read more about our <NextLink href='/research'><Link>research</Link></NextLink>
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Technologies
      </Heading>
      <Text>
        Carbon removal spans a range of technologies for removing carbon dioxide from the atmosphere.
        Here are some of the ones we are working on.
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Forests
      </Heading>
      <Text>
        What we're doing...
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Soil
      </Heading>
      <Text>
        What we're doing...
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Biomass
      </Heading>
      <Text>
        What we're doing...
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Direct air capture
      </Heading>
      <Text>
        What we're doing...
      </Text>
      <Heading sx={{ my: [3], fontSize: [4] }}>
        Mineralization
      </Heading>
      <Text>
        What we're doing...
      </Text>
      </Box>
    </Layout>
  )
}

export default About