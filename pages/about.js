import { Divider, Styled, Grid, Box, Text, Link } from 'theme-ui'
import { Layout } from '@carbonplan/components'
import Arrow from '../components/arrow'
import Technology from '../components/technology'

const About = () => {
  return (
    <Layout links={'homepage'} title={'about / carbonplan'}>
      <Text as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
        About
      </Text>
      <Styled.h2>Mission</Styled.h2>
      <Grid
        gap={['16px', '16px', '32px']}
        columns={[1, 1, '800px 1fr']}
        sx={{ mb: [4, 4, 3] }}
      >
        <Box sx={{ maxWidth: '750px' }}>
          <Text as='p' variant='styles.p' sx={{ mt: [0] }}>
            Addressing the crisis of climate change requires action on several
            fronts. We need critical reductions in emissions. We also need large-scale deployment of carbon removal. 
            Our solutions need to respect science and ensure justice. And we no longer have time
            for approaches that don't work.
          </Text>
          <Text as='p' variant='styles.p' sx={{ mb: [1] }}>
            We're a non-profit that analyzes climate solutions based
            on the best available science and data. We help organizations in the public and private sector
            make specific decisions towards their goals. And we work
            collaboratively to build open tools and resources for the evaluation
            and deployment of robust climate programs.
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
      <Divider sx={{ my: [0] }}></Divider>
      <Box sx={{ pt: [1] }}>
        <Text as='h2' variant='styles.h2' sx={{ mt: [4, 4, 4], mb: [4, 4, 4] }}>
          Our work
        </Text>
      </Box>
      <Grid
        gap={['16px', '16px', '64px']}
        columns={[1, 1, 3]}
        sx={{ mb: [4], pb: [2] }}
      >
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              color: 'red'
            }}
          >
            RESEARCH
          </Text>
          <Text as='p' sx={{ mb: [3] }}>
            We collaborate with researchers to build open source data and tools. 
            Through this work we produce datasets and models that directly inform
            decision making across a range of sectors.
          </Text>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              color: 'yellow'
            }}
          >
            COMMUNICATION
          </Text>
          <Text as='p' sx={{ mb: [3] }}>
            We combine scientific storytelling and modern web technology to 
            explain complex climate concepts with interactive data and visuals, 
            and provide timely commentary
            on newsworthy events.
          </Text>
        </Box>
        <Box sx={{ fontSize: [3] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              color: 'teal'
            }}
          >
            ENGAGEMENT
          </Text>
          <Text sx={{ mb: [3] }}>
            We work with companies, non-profits, and government organizations
            to help analyze climate programs and projects. We focus on
            transparency and quality, bringing rigorous science to
            complex problems.
          </Text>
        </Box>
      </Grid>
      <Divider sx={{ my: [0] }}></Divider>
      <Grid
        gap={['16px', '16px', '64px']}
        columns={[1, 1, 2]}
        sx={{ my: [4], pb: [2], }}
      >
        <Box sx={{fontSize: [6], lineHeight: 'heading', mb: [2, 0, 0]}}>
          <BigLink sx={{color: 'red'}}>Browse our latest research</BigLink>
        </Box>
        <Box sx={{fontSize: [6], lineHeight: 'heading'}}>
          <BigLink sx={{color: 'yellow'}}>Download our 2020 annual report</BigLink>
        </Box>
      </Grid>
      <Divider sx={{ my: [0] }}></Divider>
      <Grid
        gap={['16px', '16px', '64px']}
        columns={[1, 1, 2]}
        sx={{ my: [5], pb: [2] }}
      >
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              color: 'red'
            }}
          >
            RESEARCH HIGHLIGHTS
          </Text>
          <SmallLink>CDR Primer</SmallLink>
          <SmallLink>Direct air capture calculator</SmallLink>
          <SmallLink>Permanence calculator</SmallLink>
          <SmallLink>Taskforce letter</SmallLink>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              color: 'yellow'
            }}
          >
            RECENT PRESS
          </Text>
          <SmallLink>Test link</SmallLink>
          <SmallLink>Test link</SmallLink>
          <SmallLink>Test link</SmallLink>
          <SmallLink>Test link</SmallLink>
        </Box>
      </Grid>
    </Layout>
  )
}

function BigLink({ sx, href, children }) {
  return (
    <Box sx={{
      fontSize: [6], 
      lineHeight: 'heading',
      width: 'fit-content',
    }}>
    <Link id='link' sx={{ 
      textDecoration: 'none', 
      transition: '0.15s',
      '&:hover > #arrow': {
        transform: 'rotate(45deg)',
      },
    }} href={href}>
      {children}
        <Box
          as='span'
          id='arrow'
          sx={{
            ml: [2],
            fontSize: [7],
            position: 'relative',
            top: '9px',
            display: 'inline-block',
            lineHeight: 0,
            left: '0px',
            transition: '0.15s',
            ...sx
          }}
        >
          ↗
        </Box>
      </Link>
    </Box>
  )
}

function SmallLink({ sx, href, children }) {
  return (
    <Box sx={{
      fontSize: [4], 
      lineHeight: 'heading',
      width: 'fit-content',
      mb: [1]
    }}>
    <Link id='link' sx={{ 
      textDecoration: 'none', 
      '&:hover > #arrow': {
        transform: 'rotate(45deg)',
      },
    }} href={href}>
      <Box sx={{
        transition: '0.15s',
        display: 'inline-block'
      }}>
      {children}
      </Box>
        <Box
          as='span'
          id='arrow'
          sx={{
            ml: [2],
            fontSize: [4],
            position: 'relative',
            top: '3px',
            display: 'inline-block',
            lineHeight: 0,
            left: '0px',
            transition: '0.15s',
            ...sx
          }}
        >
          ↗
        </Box>
      </Link>
    </Box>
  )
}

export default About
