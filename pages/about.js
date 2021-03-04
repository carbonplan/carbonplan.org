import { Divider, Styled, Grid, Box, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout } from '@carbonplan/components'
import Arrow from '../components/arrow'
import ArrowLink from '../components/arrow-link'
import Technology from '../components/technology'

const About = () => {
  return (
    <Layout links={'homepage'} title={'about / carbonplan'}>
      <Text as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
        About
      </Text>
      <Styled.h2>Mission</Styled.h2>
      <Box sx={{ mb: [4, 4, 3] }}>
        <Grid columns={[1, 1, '1fr 210px']} sx={{ mb: [4], pb: [2] }}>
          <Box sx={{ maxWidth: '750px', display: 'inline-block' }}>
            <Text as='p' variant='styles.p' sx={{ mt: [0] }}>
              Addressing the climate crisis requires action on several fronts.
              We need critical reductions in emissions. We also need large-scale
              deployment of carbon removal. Our solutions need to respect
              science and support just outcomes. And we no longer have time for
              approaches that don't work.
            </Text>
            <Text as='p' variant='styles.p' sx={{ mb: [1] }}>
              We're a non-profit that analyzes climate solutions based on the
              best available science and data. We work collaboratively to build
              open tools and resources for the evaluation and deployment of
              robust climate programs. We share what we have learned through
              public communication and collaboration with journalists. And we
              help organizations in the public and private sector make better
              decisions to advance their climate goals.
            </Text>
          </Box>
          <Box
            sx={{
              display: ['none', 'none', 'inline-block'],
              mt: ['-10px'],
              ml: ['30px'],
            }}
          >
            <Arrow />
          </Box>
        </Grid>
      </Box>
      <Divider sx={{ width: '100%', my: [0] }}></Divider>
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
              color: 'red',
            }}
          >
            RESEARCH
          </Text>
          <Text as='p' sx={{ mb: [3] }}>
            We collaborate with researchers to build open source data and tools.
            Through this work we produce datasets and models that directly
            inform decision making across a range of sectors.
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
              color: 'yellow',
            }}
          >
            COMMUNICATION
          </Text>
          <Text as='p' sx={{ mb: [3] }}>
            We combine scientific storytelling and modern web technology to
            explain complex concepts with interactive data and visuals, and
            provide timely commentary on newsworthy events.
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
              color: 'teal',
            }}
          >
            ENGAGEMENT
          </Text>
          <Text sx={{ mb: [3] }}>
            We work with companies, non-profits, and government organizations to
            help analyze climate programs and projects. We focus on transparency
            and quality, bringing rigorous science to complex problems.
          </Text>
        </Box>
      </Grid>
      <Divider sx={{ my: [0] }}></Divider>
      <Grid
        gap={['16px', '16px', '64px']}
        columns={[1, 1, 2]}
        sx={{ my: [4], pb: [2] }}
      >
        <Box
          sx={{
            fontSize: [6],
            maxWidth: ['100%', '100%', '450px'],
            mb: [2, 0, 0],
          }}
        >
          <ArrowLink big={true} href={'/research'} color={'red'}>
            Browse our latest<br/>research
          </ArrowLink>
        </Box>
        <Box sx={{ fontSize: [6], maxWidth: ['400px', '450px', '450px'] }}>
          <ArrowLink
            big={true}
            href={
              'https://carbonplan-assets.s3.amazonaws.com/docs/CarbonPlan-Annual-Report-2020.pdf'
            }
            color={'yellow'}
          >
            Download our 2020 annual report
          </ArrowLink>
        </Box>
      </Grid>
      <Divider sx={{ my: [0] }}></Divider>
      <Grid
        gap={['16px', '16px', '64px']}
        columns={[1, 1, 2]}
        sx={{ my: [5], pb: [0, 2, 2] }}
      >
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              color: 'red',
            }}
          >
            RECENT HIGHLIGHTS
          </Text>
          <ArrowLink href='https://cdrprimer.org/'>CDR Primer</ArrowLink>
          <ArrowLink href='/research/dac-calculator'>
            Direct air capture calculator
          </ArrowLink>
          <ArrowLink href='/research/permanence-calculator'>
            Permanence calculator
          </ArrowLink>
          <ArrowLink href='https://carbonplan-assets.s3.amazonaws.com/docs/Offset-Task-Force-Comment-Letter-01-05-2021.pdf'>
            Taskforce letter
          </ArrowLink>
        </Box>
        <Box sx={{ fontSize: [3] }}>
          <Text
            as='h3'
            sx={{
              mb: [3],
              fontSize: [3],
              fontFamily: 'heading',
              letterSpacing: 'smallcaps',
              color: 'yellow',
            }}
          >
            RECENT PRESS
          </Text>
          <ArrowLink href='https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8'>
            Financial Times
          </ArrowLink>
          <ArrowLink href='https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/'>
            Bloomberg
          </ArrowLink>
          <ArrowLink href='https://arstechnica.com/science/2020/11/want-to-offset-your-carbon-footprint-heres-what-you-need-to-know/'>
            Ars Technica
          </ArrowLink>
          <ArrowLink href='https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/'>
            Grist
          </ArrowLink>
        </Box>
      </Grid>
      <Divider sx={{ my: [0] }}></Divider>
      <Box sx={{ pt: [1] }}>
        <Text as='h2' variant='styles.h2' sx={{ mt: [4, 4, 4], mb: [4, 4, 4] }}>
          Learn more
        </Text>
      </Box>
      <Grid
        gap={['16px', '16px', '64px']}
        columns={[2, 2, 4]}
        sx={{ mb: [4], pb: [3, 3, 4] }}
      >
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <LearnMoreLink internal={true} label={'TEAM'} href='/team'>
            Read about our team and collaborators
          </LearnMoreLink>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <LearnMoreLink internal={true} label={'PRESS'} href='/press'>
            View a list of press about our work
          </LearnMoreLink>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <LearnMoreLink label={'GITHUB'} href='https://github.com/carbonplan'>
            Check out our open source code
          </LearnMoreLink>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3, 3, 0] }}>
          <LearnMoreLink internal={true} label={'FUNDING'} href='/funding'>
            View our sources of funding
          </LearnMoreLink>
        </Box>
      </Grid>
    </Layout>
  )
}

function LearnMoreLink({ label, href, children, internal = false }) {
  const sx = {
    link: {
      textDecoration: 'none',
      '&:hover > #arrow': {
        transform: 'rotate(45deg)',
      },
    },
  }

  function Wrapper({ href, children }) {
    if (internal) {
      return (
        <NextLink href={href} passHref>
          <Link sx={sx.link}>{children}</Link>
        </NextLink>
      )
    } else {
      return (
        <Link href={href} sx={sx.link}>
          {children}
        </Link>
      )
    }
  }

  return (
    <Box
      sx={{
        fontSize: [3],
        lineHeight: '1.2em',
        width: 'fit-content',
        mb: [1],
      }}
    >
      <Wrapper href={href}>
        <Box sx={{ transition: '0.15s', maxWidth: '200px', pb: [2] }}>
          {children}
        </Box>
        <Box
          sx={{
            transition: '0.15s',
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: 'smallcaps',
            fontFamily: 'heading',
            fontSize: [2],
            ...sx,
          }}
        >
          {label}
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
            ...sx,
          }}
        >
          ↗
        </Box>
        <Box as='span' sx={{ display: 'inline-block', width: ['12px'] }} />
      </Wrapper>
    </Box>
  )
}

export default About
