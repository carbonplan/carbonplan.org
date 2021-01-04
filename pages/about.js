import { Divider, Styled, Grid, Box, Text, Link, Image } from 'theme-ui'
import { Layout } from '@carbonplan/components'
import Arrow from '../components/arrow'
import Technology from '../components/technology'

const About = () => {
  return (
    <Layout local>
      <Styled.h1>About</Styled.h1>
      <Styled.h2>Mission</Styled.h2>
      <Grid
        gap={['16px', '16px', '32px']}
        columns={[1, 1, '800px 1fr']}
        sx={{ mb: [4, 4, 0] }}
      >
        <Box sx={{ maxWidth: '750px' }}>
          <Text as='p' variant='styles.p' sx={{ mt: [0] }}>
            Addressing the crisis of climate change requires action on several
            fronts. We now need large-scale deployment of carbon removal
            alongside critical reductions in emissions. Carbon removal refers to
            natural or technological approaches for removing carbon dioxide from
            the atmosphere.
          </Text>
          <Text as='p' variant='styles.p' sx={{ mb: [1] }}>
            We're a non-profit that analyzes carbon removal opportunities based
            on the best available science and data. We help organizations make
            specific decisions towards their carbon removal goals. And we work
            collaboratively to build open tools and resources for the evaluation
            and deployment of carbon removal and other climate solutions.
          </Text>
        </Box>
        <Box
          sx={{
            display: ['none', 'none', 'inherit'],
            ml: ['75px'],
            mt: ['-10px'],
          }}
        >
          <Arrow />
        </Box>
      </Grid>
      <Divider></Divider>
      <Text as='h2' variant='styles.h2' sx={{ mt: [4, 4, 4], mb: [4, 4, 4] }}>
        Our work
      </Text>
      <Grid gap={['16px', '16px', '64px']} columns={[1, 1, 2]} sx={{ mb: [4] }}>
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
            }}
          >
            / RESEARCH
          </Text>
          <Text as='p' sx={{ mb: [3] }}>
            We collaborate with researchers to build open source data and tools
            for carbon removal and climate solutions. Through this work we
            produce datasets, models, interactive articles, and commentary on
            climate policies and programs.
          </Text>
          <Link sx={{ textDecoration: 'none' }} href='/research'>
            <Box
              sx={{
                display: 'inline-block',
                color: 'text',
                '&:hover': {
                  color: 'secondary',
                },
                mt: [2],
                mb: [1],
                fontSize: [2],
                letterSpacing: 'smallcaps',
              }}
            >
              BROWSE OUR RESEARCH
              <Text
                as='span'
                sx={{
                  ml: [2],
                  fontSize: [4],
                  position: 'relative',
                  top: '4px',
                  display: 'inline-block',
                  lineHeight: 0,
                }}
              >
                ↗
              </Text>
            </Box>
          </Link>
        </Box>
        <Box sx={{ fontSize: [3] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
            }}
          >
            / REPORTS
          </Text>
          <Text sx={{ mb: [3] }}>
            We engage with companies, non-profits, and government organizations
            to help analyze climate programs and projects. We focus on
            transparency and quality, bringing standards and shared concepts to
            complex problems.
          </Text>
          <Text>
            <Link sx={{ textDecoration: 'none' }} href='/reports'>
              <Box
                sx={{
                  display: 'inline-block',
                  color: 'text',
                  '&:hover': {
                    color: 'secondary',
                  },
                  mt: [2],
                  mb: [1],
                  fontSize: [2],
                  letterSpacing: 'smallcaps',
                }}
              >
                VIEW OUR PROJECT REPORTS
                <Text
                  as='span'
                  sx={{
                    ml: [2],
                    fontSize: [4],
                    position: 'relative',
                    top: '4px',
                    display: 'inline-block',
                    lineHeight: 0,
                  }}
                >
                  ↗
                </Text>
              </Box>
            </Link>
          </Text>
        </Box>
      </Grid>
      <Divider></Divider>
      <Box sx={{ fontSize: [3] }}>
        <Text
          as='h2'
          variant='styles.h2'
          id='technologies'
          sx={{ mb: [4, 4, 4], mt: [4, 4, 4] }}
        >
          Technologies and sectors
        </Text>
        <Text as='p' sx={{ maxWidth: '800px', mt: [0], mb: [5] }}>
          We work across a range of strategies that remove carbon dioxide from
          the atmosphere.
        </Text>
        <Technology name={'forests'} color={'green'}>
          Forests are natural carbon sinks, capturing carbon dioxide from the
          atmosphere through the chemical reactions of photosynthesis and
          storing it in their biomass, about half of which is carbon. Carbon
          removal projects with forests can include planting trees or other
          vegetation to restore existing forests, or preventing deforestation,
          which enhances the natural carbon sink — but all remain at risk to
          natural or human disturbance.
        </Technology>
        <Technology name={'soil'} color={'orange'}>
          Soil carbon sequestration occurs when changes to land management
          practices increase the storage of carbon in soils. Practices include
          the addition of cover crops, changes from conventional tillage to no
          tillage, and applying soil amendments. In theory, these practices can
          both increase soil storage and crop health, but they must be
          maintained over time for effective carbon removal.
        </Technology>
        <Technology name={'biomass'} color={'yellow'}>
          When biological systems sequester carbon, it ends up in a form that
          will eventually decompose and result in carbon dioxide emissions. It
          is possible to take biomass and convert it to some more durable form,
          such as building materials or biochar. While producing these materials
          on its own is not carbon removal, the complete system of biomass
          production and carbon storage removes carbon dioxide from the
          atmosphere.
        </Technology>
        <Technology name={'DAC'} color={'purple'}>
          Direct air capture is a class of technologies that use synthetic
          sorbents or solvents that selectively bind carbon dioxide. Large
          contactors housing these chemicals use fans to expose them to carbon
          dioxide, and chemical separation is then used to recover the carbon
          dioxide in pure form. The resulting stream can be combined with
          mineralization or geological injection to achieve permanent carbon
          removal.
        </Technology>
        <Technology name={'mineralization'} color={'grey'}>
          When alkaline materials react with carbon dioxide they form solid
          carbonate minerals that can achieve effective permanent carbon
          removal. Source materials include naturally occurring silicates like
          olivine and serpentine, or wastes from mining operations. Specific
          implementations can include grinding minerals for reaction with carbon
          dioxide in ambient air, or injecting pure carbon dioxide into
          alkaline-rich geological formations.
        </Technology>
        <Technology name={'ocean'} color={'teal'}>
          The world's oceans are vast carbon sinks with a critical role in the
          carbon cycle. At least two pathways may accelerate uptake and storage
          of carbon in the ocean. The first is to enhance the productivity of
          organisms in the ocean, such as phytoplankton. The second is to
          increase the store of inorganic carbon in the ocean through the
          extraction, processing, and dissolution of minerals. Both have
          enormous potential scale, but require significant research and
          testing.
        </Technology>
      </Box>
    </Layout>
  )
}

export default About
