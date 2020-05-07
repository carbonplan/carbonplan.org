import Layout from '../components/layout'
import Technology from '../components/technology'
import { Divider, Grid, Box, Text, Heading, Link, Image } from 'theme-ui'
import { default as NextLink } from 'next/link'


function About () {

  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
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
      <Grid gap={['16px', '16px', '64px']} columns={[1, 1, 2]} sx={{ mb: [4] }}>
        <Box>
          <Text sx={{ mb: [3], mt: [4], fontSize: [3], letterSpacing: 'wide'}}>
            / RESEARCH
          </Text>
          <Text sx={{ fontSize: [3], mb: [3] }}>
            We collaborate with academic researchers to build open source data and tools
            for carbon removal and climate solutions. Through this work we produce datasets, models, 
            interactive articles, and commentary on climate policies and programs.
          </Text>
          {/*
          <Text>
            <NextLink href='/research'>
              <Link sx={{ fontSize: [2], letterSpacing: 'wide' }}>BROWSE OUR RESEARCH</Link>
            </NextLink>
          </Text>
          */}
        </Box>
        <Box>
          <Text sx={{ mb: [3], mt: [4], fontSize: [3], letterSpacing: 'wide'}}>
            / REPORTS
          </Text>
          <Text sx={{ fontSize: [3], mb: [3] }}>
            We engage with companies, non-profits, and government organizations to help
            analyze climate programs and projects. We focus on transparency and reproducibility, 
            bringing standards and shared concepts to complex technical problems.
          </Text>
          {/*
          <Text>
            <NextLink href='/reports'>
              <Link sx={{ fontSize: [2], letterSpacing: 'wide'}}>VIEW OUR PROJECT REPORTS</Link>
            </NextLink>
          </Text>
          */}
        </Box>
      </Grid>
      <Divider></Divider>
      <Heading sx={{ my: [3], mt: [4], fontSize: [5] }}>
        Technologies and sectors
      </Heading>
      <Text sx={{ fontSize: [3], maxWidth: '800px', mb: [5] }}>
        We work across a range of strategies that remove carbon dioxide from the atmosphere.
      </Text>
      <Technology name={'forests'} color={'green'}>
        Forests are natural carbon sinks, capturing carbon dioxide from the atmosphere
        through the chemical reactions of photosynthesis and storing it in their
        biomass, about half of which is carbon. Carbon removal projects with forests can include
        planting trees or other vegetation to restore existing forests, or preventing
        deforestation, which enhanced the natural carbon sink. 
      </Technology>
      <Technology name={'soil'} color={'orange'}>
        Forests are natural carbon sinks, capturing carbon dioxide from the atmosphere
        through the chemical reactions of photosynthesis and storing it in their
        biomass, about half of which is carbon. Carbon removal projects with forests can include
        planting trees or other vegetation to restore existing forests, or preventing
        deforestation, which enhanced the natural carbon sink. 
      </Technology>
      <Technology name={'biomass'} color={'yellow'}>
        Forests are natural carbon sinks, capturing carbon dioxide from the atmosphere
        through the chemical reactions of photosynthesis and storing it in their
        biomass, about half of which is carbon. Carbon removal projects with forests can include
        planting trees or other vegetation to restore existing forests, or preventing
        deforestation, which enhanced the natural carbon sink. 
      </Technology>
      <Technology name={'DAC'} color={'purple'}>
        Forests are natural carbon sinks, capturing carbon dioxide from the atmosphere
        through the chemical reactions of photosynthesis and storing it in their
        biomass, about half of which is carbon. Carbon removal projects with forests can include
        planting trees or other vegetation to restore existing forests, or preventing
        deforestation, which enhanced the natural carbon sink. 
      </Technology>
      <Technology name={'mineralization'} color={'grey'}>
        Forests are natural carbon sinks, capturing carbon dioxide from the atmosphere
        through the chemical reactions of photosynthesis and storing it in their
        biomass, about half of which is carbon. Carbon removal projects with forests can include
        planting trees or other vegetation to restore existing forests, or preventing
        deforestation, which enhanced the natural carbon sink. 
      </Technology>
      <Technology name={'ocean'} color={'teal'}>
        Forests are natural carbon sinks, capturing carbon dioxide from the atmosphere
        through the chemical reactions of photosynthesis and storing it in their
        biomass, about half of which is carbon. Carbon removal projects with forests can include
        planting trees or other vegetation to restore existing forests, or preventing
        deforestation, which enhanced the natural carbon sink. 
      </Technology>
      </Box>
    </Layout>
  )
}

export default About