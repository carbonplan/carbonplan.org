import Layout from '../components/layout'
import { Divider, Grid, Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function About () {
  return (
    <Layout>
      <Box>
      <Heading sx={{ my: [5], fontSize: [7] }}>
        About
      </Heading>
      <Heading sx={{ mb: [3], fontSize: [5] }}>
        Mission
      </Heading>
      <Text sx={{ fontSize: [3], maxWidth: '800px', mb: [5] }}>
        We analyze carbon removal opportunities based on the best available science and data.
        We help organizations make specific decisions towards carbon removal goals. 
        And we work collaboratively with the scientific community to build open tools and 
        resources for the evaluation and deployment of carbon removal and other climate solutions.
      </Text>
      <Divider></Divider>
      <Heading sx={{ mb: [1], mt: [4], fontSize: [5]}}>
        Our work
      </Heading>
      <Grid gap={['16px', '16px', '64px']} columns={[1, 1, 2]} sx={{ mb: [5] }}>
        <Box>
        <Text sx={{ mb: [3], mt: [4], fontSize: [3], letterSpacing: '0.05em'}}>
          / REPORTS
        </Text>
        <Text sx={{ fontSize: [3], mb: [3] }}>
          We engage with companies, non-profits, and government organizations to help
          analyze climate programs and projects. We focus on transparency and reproducibility, 
          bringing standards and shared concepts to complex technical problems.
        </Text>
        <Text>
          <Link sx={{ fontSize: [1], letterSpacing: '0.05em', pb: [1] }} href='https://reports.carbonplan.now.sh/'>
            VIEW OUR REPORTS
          </Link>
        </Text>
        </Box>
        <Box>
        <Text sx={{ mb: [3], mt: [4], fontSize: [3], letterSpacing: '0.05em'}}>
          / RESEARCH
        </Text>
        <Text sx={{ fontSize: [3], mb: [3] }}>
          We collaborate with academic researchers to build open source data and tools
          for carbon removal and climate solutions. Through this work we produce datasets, models, 
          interactive articles, and commentary on climate policies and programs.
        </Text>
        <Text>
          <NextLink href='/research'>
            <Link sx={{ fontSize: [1], letterSpacing: '0.05em', pb: [1] }}>BROWSE OUR RESEARCH</Link>
          </NextLink>
        </Text>
        </Box>
      </Grid>
      <Divider></Divider>
      <Heading sx={{ my: [3], mt: [4], fontSize: [5] }}>
        Technologies
      </Heading>
      <Text sx={{ fontSize: [3], maxWidth: '800px', mb: [5] }}>
        Carbon removal spans a range of technologies for removing carbon dioxide from the atmosphere.
        Here are some of the project areas we analyze.
      </Text>
      <Grid gap={['16px', '16px', '32px']} columns={[1, 1, '1fr 2fr']} sx={{ mb: [5] }}>
        <Heading>
          Image
        </Heading>
        <Box>
          <Text sx={{ color: 'green', fontFamily: 'heading', letterSpacing: '0.07em' }}>
            FORESTS
          </Text>
           <Text sx={{ fontSize: [3] }}>
            Description of forest projects
          </Text>
        </Box>
      </Grid>
      <Grid gap={['16px', '16px', '32px']} columns={[1, 1, '1fr 2fr']} sx={{ mb: [5] }}>
        <Heading>
          Image
        </Heading>
        <Box>
          <Text sx={{ color: 'orange', fontFamily: 'heading', letterSpacing: '0.07em' }}>
            SOIL
          </Text>
           <Text sx={{ fontSize: [3] }}>
            Description of soil projects
          </Text>
        </Box>
      </Grid>
      <Grid gap={['16px', '16px', '32px']} columns={[1, 1, '1fr 2fr']} sx={{ mb: [5] }}>
        <Heading>
          Image
        </Heading>
        <Box>
          <Text sx={{ color: 'yellow', fontFamily: 'heading', letterSpacing: '0.07em' }}>
            BIOMASS
          </Text>
           <Text sx={{ fontSize: [3] }}>
            Description of biomass projects
          </Text>
        </Box>
      </Grid>
      <Grid gap={['16px', '16px', '32px']} columns={[1, 1, '1fr 2fr']} sx={{ mb: [5] }}>
        <Heading>
          Image
        </Heading>
        <Box>
          <Text sx={{ color: 'purple', fontFamily: 'heading', letterSpacing: '0.07em' }}>
            DIRECT AIR CAPTURE
          </Text>
           <Text sx={{ fontSize: [3] }}>
            Description of air capture projects
          </Text>
        </Box>
      </Grid>
      <Grid gap={['16px', '16px', '32px']} columns={[1, 1, '1fr 2fr']} sx={{ mb: [5] }}>
        <Heading>
          Image
        </Heading>
        <Box>
          <Text sx={{ color: 'grey', fontFamily: 'heading', letterSpacing: '0.07em' }}>
            MINERALIZATION
          </Text>
           <Text sx={{ fontSize: [3] }}>
            Description of mineralization projects
          </Text>
        </Box>
      </Grid>
      <Grid gap={['16px', '16px', '32px']} columns={[1, 1, '1fr 2fr']} sx={{ mb: [5] }}>
        <Heading>
          Image
        </Heading>
        <Box>
          <Text sx={{ color: 'teal', fontFamily: 'heading', letterSpacing: '0.07em' }}>
            OCEAN
          </Text>
           <Text sx={{ fontSize: [3] }}>
            Description of ocean projects
          </Text>
        </Box>
      </Grid>
      </Box>
    </Layout>
  )
}

export default About