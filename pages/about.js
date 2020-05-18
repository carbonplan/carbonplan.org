import Layout from '../components/layout'
import Arrow from '../components/arrow'
import Technology from '../components/technology'
import { Divider, Grid, Box, Text, Heading, Link, Image } from 'theme-ui'
import { default as NextLink } from 'next/link'


function About () {

  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
      <Heading sx={{ my: [4, 5, 5], letterSpacing: 'heading', fontSize: [6, 7, 7] }}>
        About
      </Heading>
      <Heading sx={{ mb: [4], letterSpacing: 'heading', fontSize: [5] }}>
        Mission
      </Heading>
      <Grid gap={['16px', '16px', '32px']} columns={[1, 1, '800px 1fr']} sx={{ mb: [2] }}>
        <Box>
          <Text sx={{ fontSize: [3], maxWidth: '750px', mb: [3]}}>
            Addressing the crisis of climate change requires action on several fronts. 
            We now need large-scale deployment of carbon removal alongside critical 
            reductions in emissions. Carbon removal refers to natural or technological 
            approaches for removing carbon dioxide from the atmosphere.
          </Text>
          <Text sx={{ fontSize: [3], maxWidth: '750px', mb: [3] }}>
            We analyze carbon removal opportunities based on the best available science and data.
            We help organizations make specific decisions towards carbon removal goals. 
            And we work collaboratively with the scientific community to build open tools and 
            resources for the evaluation and deployment of carbon removal and other climate solutions.
          </Text>
        </Box>
        <Box sx={{ display: ['none', 'none', 'inherit'], ml: ['75px'], mt: ['-10px'] }}>
          <Arrow/>
        </Box>
      </Grid>
      <Divider></Divider>
      <Heading sx={{ mb: [1], mt: [4], fontSize: [5]}}>
        Our work
      </Heading>
      <Grid gap={['16px', '16px', '64px']} columns={[1, 1, 2]} sx={{ mb: [5] }}>
        <Box>
          <Heading sx={{ mb: [3], mt: [4], fontSize: [3], letterSpacing: 'wide'}}>
            / RESEARCH
          </Heading>
          <Text sx={{ fontSize: [3], mb: [3] }}>
            We collaborate with researchers to build open source data and tools
            for carbon removal and climate solutions. Through this work we produce datasets, models, 
            interactive articles, and commentary on climate policies and programs.
          </Text>
          <Text>
            <Link sx={{ textDecoration: 'none' }} href='/research'>
              <Text sx={{ 
                color: 'text',
                '&:hover > #arrow': {
                  color: 'secondary'
                },
                mt: [2],
                fontSize: [2], 
                letterSpacing: 'wide' 
              }}>BROWSE OUR RESEARCH
              <Text id='arrow' variant='arrow'>↗</Text>
              </Text>
            </Link>
          </Text>
        </Box>
        <Box>
          <Heading sx={{ mb: [3], mt: [4], fontSize: [3], letterSpacing: 'wide'}}>
            / REPORTS
          </Heading>
          <Text sx={{ fontSize: [3], mb: [3] }}>
            We engage with companies, non-profits, and government organizations to help
            analyze climate programs and projects. We focus on transparency and quality, 
            bringing standards and shared concepts to complex technical problems.
          </Text>
          <Text>
            <Link sx={{ textDecoration: 'none' }} href='/reports'>
              <Text sx={{ 
                color: 'text',
                '&:hover > #arrow': {
                  color: 'secondary'
                },
                mt: [2],
                fontSize: [2], 
                letterSpacing: 'wide' 
              }}>VIEW OUR PROJECT REPORTS
              <Text id='arrow' variant='arrow'>↗</Text>
              </Text>
            </Link>
          </Text>
        </Box>
      </Grid>
      <Divider></Divider>
      <Heading sx={{ mb: [4], mt: [4], fontSize: [5] }}>
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
        deforestation, which enhances the natural carbon sink — but all remain
        at risk to natural or human disturbance.
      </Technology>
      <Technology name={'soil'} color={'orange'}>
        Soil carbon sequestration occurs when changes to land management practices increase
        the storage of carbon in soils. Practices include the addition of cover crops, 
        changes from conventional tillage to no tillage, and applying soil amendments. 
        In theory, these practices can both increase soil storage and crop health, but they
        must be maintained over time for effective carbon removal.
      </Technology>
      <Technology name={'biomass'} color={'yellow'}>
        When biological systems sequester carbon, it ends up in a form that will
        eventually decompose and result in carbon dioxide emissions. It is possible to
        take biomass and convert it to some more durable form, 
        such as building materials or biochar. While 
        producing these materials on its own is not carbon removal, 
        the complete system of biomass production and carbon storage removes carbon
        dioxide from the atmosphere.
      </Technology>
      <Technology name={'DAC'} color={'purple'}>
        Direct air capture is a class of technologies that use 
        synthetic sorbents or solvents that selectively bind carbon dioxide. 
        Large contactors housing these chemicals use fans to expose them to carbon dioxide,
        and chemical separation is then used to recover the carbon dioxide in pure form. 
        The resulting stream can be combined with 
        mineralization or geological injection to achieve permanent carbon removal.
      </Technology>
      <Technology name={'mineralization'} color={'grey'}>
        When alkaline materials react with carbon dioxide they form solid carbonate minerals
        that can achieve effective permanent carbon removal. Source materials include 
        naturally occurring silicates like olivine and serpentine, or wastes
        from mining operations. Specific implementations can include grinding minerals
        for reaction with carbon dioxide in ambient air, or injecting pure carbon dioxide
        into alkaline-rich geological formations.
      </Technology>
      <Technology name={'ocean'} color={'teal'}>
        The world's oceans are vast carbon sinks with a critical role in the carbon cycle.
        At least two pathways may accelerate uptake and storage 
        of carbon in the ocean. The first is to enhance the productivity of organisms
        in the ocean, such as phytoplankton. 
        The second is to increase the store of inorganic carbon 
        in the ocean through the extraction, processing, and dissolution of minerals. 
        Both have enormous potential scale, but require
        significant research and testing.
      </Technology>
      </Box>
    </Layout>
  )
}

export default About