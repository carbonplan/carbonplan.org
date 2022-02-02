import { Flex, Grid, Box, Themed, Divider, Text } from 'theme-ui'
import { default as NextLink } from 'next/link'
import {
  Row,
  Column,
  Layout,
  Button,
  Link,
  Callout,
  Heading,
} from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'
import { highlights, press } from '../data/recent'
import { keyframes } from '@emotion/react'

const sx = {
  link: {
    textDecoration: 'none',
    display: 'block',
    width: 'fit-content',
    '@media (hover: none) and (pointer: coarse)': {
      '&:hover': {
        color: 'primary',
      },
    },
  },
}

const About = () => {
  return (
    <Layout links={'homepage'} title={'about / carbonplan'} nav={'about'}>
      <Heading>About</Heading>
      <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
        <Row sx={{ mb: [5, 6, 7, 8] }}>
          <Column start={[1, 2]} width={[6, 4]}>
            <Flex
              sx={{
                height: '100%',
                alignContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ width: '100%', mt: [0, 0, '-2px', '-4px'] }}>
                <WelcomeArrow />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  fontSize: [3, 4, 5, 6],
                  letterSpacing: 'heading',
                  lineHeight: 'heading',
                }}
              >
                We’re a non-profit that analyzes climate solutions based on the
                best available science and data.
              </Box>
            </Flex>
          </Column>
          <Column start={[1, 7]} width={[6, 5]}>
            <Box>
              <Box as='p' variant='styles.p' sx={{ mt: [0] }}>
                Addressing the climate crisis requires action on several fronts.
                We need critical reductions in emissions. We also need
                large-scale deployment of carbon removal. Our solutions need to
                respect science and support just outcomes. And we no longer have
                time for approaches that don’t work.
              </Box>
              <Box as='p' variant='styles.p' sx={{ mb: [0] }}>
                Our <Link href='/team'>team</Link> works collaboratively to
                build open tools and resources for the evaluation and deployment
                of robust climate programs. We share what we have learned
                through public communication and collaboration with journalists.
                And we help organizations in the public and private sector make
                better decisions to advance their climate goals.
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
      <Box sx={{ display: ['initial', 'initial', 'none', 'none'] }}>
        <Row>
          <Column start={[1, 1, 2, 2]} width={[6, 3]}>
            <Box
              as='h2'
              variant='styles.h2'
              sx={{ mt: [0, 0, 0, 0], mb: [0, 3, 5, 5] }}
            >
              Our mission
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [4, 5, 6, 7] }}>
          <Column start={[1, 2, 1, 1]} width={[6, 5, 5, 5]}>
            <Box sx={{ pb: [1] }}>
              <Box as='p' variant='styles.p' sx={{ mb: [4, 5, 6, 7] }}>
                Addressing the climate crisis requires action on several fronts.
                We need critical reductions in emissions. We also need
                large-scale deployment of carbon removal. Our solutions need to
                respect science and support just outcomes. And we no longer have
                time for approaches that don't work.
              </Box>
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [5, 5, 6, 7], pb: [1, 0, 0, 0] }}>
          <Column start={[1, 2, 2, 2]} width={[1]}>
            <WelcomeArrowMobile />
          </Column>
          <Column start={[2, 3, 2, 2]} width={[5, 4, 3, 3]}>
            <Box
              sx={{
                width: '100%',
                fontSize: ['28px', 5, 5, 5],
                letterSpacing: 'heading',
                lineHeight: 'heading',
              }}
            >
              We’re a non-profit that analyzes climate solutions based on the
              best available science and data.
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [4, 5, 6, 7] }}>
          <Column start={[1, 2, 1, 1]} width={[6, 5, 5, 5]}>
            <Box sx={{ pb: [1] }}>
              <Box as='p' variant='styles.p' sx={{ mb: [2] }}>
                Our <Link href='/team'>team</Link> works collaboratively to
                build open tools and resources for the evaluation and deployment
                of robust climate programs. We share what we have learned
                through public communication and collaboration with journalists.
                And we help organizations in the public and private sector make
                better decisions to advance their climate goals.
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
      <Row>
        <Column start={[1, 2]} width={[6, 10, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 3]}>
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
            Our work
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7], mb: [5, 6, 7, 8] }}>
        <Column start={[2, 3]} width={[6, 5, 3, 3]} sx={{ mb: [4, 5, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'red',
              }}
            >
              RESEARCH
            </Box>
            <Box as='p'>
              We collaborate with researchers to build open source data and
              tools. Through this work we produce datasets and models that
              directly inform decision making across a range of sectors.
            </Box>
          </Box>
        </Column>
        <Column start={[2, 6]} width={[6, 5, 3, 3]} sx={{ mb: [4, 5, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'yellow',
              }}
            >
              COMMUNICATION
            </Box>
            <Box as='p'>
              We combine scientific storytelling and modern web technology to
              explain complex concepts with interactive data and visuals, and
              provide timely commentary on newsworthy events.
            </Box>
          </Box>
        </Column>
        <Column start={[2, 9]} width={[6, 5, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'teal',
              }}
            >
              ENGAGEMENT
            </Box>
            <Box>
              We work with companies, non-profits, and government organizations
              to help analyze climate programs. We focus on transparency and
              quality, bringing rigorous science to complex problems.
            </Box>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7], mb: [5, 6, 7, 8] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 4, 5, 5]}
          sx={{ mb: [3, 0, 0, 0] }}
        >
          <Box
            sx={{
              fontSize: [6],
              mb: [2, 0, 0],
            }}
          >
            <Button
              href='/research'
              size={'lg'}
              suffix={<RotatingArrow sx={{ color: 'red' }} />}
            >
              <span>
                Browse our
                <br />
                latest research
              </span>
            </Button>
          </Box>
        </Column>
        <Column start={[1, 5, 7, 7]} width={[6, 4, 5, 5]}>
          <Box sx={{ fontSize: [6] }}>
            <Button
              href='/press'
              size={'lg'}
              suffix={<RotatingArrow sx={{ color: 'yellow' }} />}
            >
              <span>
                Read our press <br /> coverage
              </span>
            </Button>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ my: [5, 6, 7, 8] }}>
        <Column
          start={[2, 2, 3, 3]}
          width={[5, 5, 3, 3]}
          sx={{ mb: [4, 5, 0, 0] }}
        >
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'teal',
              }}
            >
              RECENT HIGHLIGHTS
            </Box>
            {highlights.map((d, i) => (
              <Button
                key={i}
                href={d.href}
                size='md'
                sx={{ mb: [1] }}
                suffix={<RotatingArrow />}
              >
                {d.label}
              </Button>
            ))}
          </Box>
        </Column>
        <Column start={[2, 2, 8, 8]} width={[5, 5, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'red',
              }}
            >
              RECENT PRESS
            </Box>
            {press.map((d, i) => (
              <Button
                key={i}
                href={d.href}
                size='md'
                sx={{ mb: [1] }}
                suffix={<RotatingArrow />}
              >
                {d.label}
              </Button>
            ))}
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 10]}>
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
            Explore more
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 4, 5, 6] }}>
        <Column start={[1, 3]} width={[3, 4, 2, 2]} sx={{ mb: [3, 0, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <Callout href='/team' label='team'>
              Read about our team members
            </Callout>
          </Box>
        </Column>
        <Column start={[4, 5, 5, 5]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <Callout href='https://github.com/carbonplan' label='github'>
              Check out our open source code
            </Callout>
          </Box>
        </Column>
        <Column start={[1, 7]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <Callout href='/funding' label={'funding'}>
              Learn about our sources of funding
            </Callout>
          </Box>
        </Column>
        <Column start={[4, 5, 9, 9]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <Callout href='/donate' label={'donate'}>
              Donate to our organization
            </Callout>
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

const animateRight = keyframes({
  '0%': {
    transform: 'translateX(0px)',
  },
  '10%': {
    transform: 'translateX(10px)',
  },
  '20%': {
    transform: 'translateX(0px)',
  },
  '100%': {
    transform: 'translateX(0px)',
  },
})

const animateDown = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '10%': {
    transform: 'translateY(10px)',
  },
  '20%': {
    transform: 'translateY(0px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
})

function WelcomeArrow() {
  return (
    <Grid
      columns={[
        '30px 1fr 30px',
        '30px 1fr 30px',
        '30px 1fr 30px',
        '40px 1fr 40px',
      ]}
      gap={[0]}
      sx={{
        animationDuration: '4000ms',
        animationPlayState: 'running',
        animationDelay: '1000ms',
        animationName: animateRight.toString(),
        animationIterationCount: 'infinite',
      }}
    >
      <Box
        sx={{
          stroke: 'primary',
          display: 'inline-block',
          fill: 'none',
          width: ['30px', '30px', '30px', '40px'],
          height: ['30px', '30px', '30px', '40px'],
          strokeWidth: 1,
        }}
      >
        <svg x='0px' y='0px' viewBox='0 0 20 20'>
          <circle vectorEffect='non-scaling-stroke' cx='10' cy='10' r='8.5' />
        </svg>
      </Box>
      <Box
        sx={{
          stroke: 'primary',
          display: 'inline-block',
          fill: 'none',
          width: [
            'calc(100% + 30px)',
            'calc(100% + 42px)',
            'calc(100% + 32px)',
            'calc(100% + 42px)',
          ],
          ml: '-2px',
        }}
      >
        <Box
          as='svg'
          x='0px'
          y='0px'
          width='100%'
          sx={{ height: ['30px', '30px', '30px', '40px'] }}
        >
          <line x1='0' x2='100%' y1='50%' y2='50%' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'inline-block',
          float: 'right',
          stroke: 'primary',
          fill: 'none',
          width: ['30px', '30px', '30px', '40px'],
          height: ['30px', '30px', '30px', '40px'],
          strokeWidth: 1,
        }}
      >
        <svg x='0px' y='0px' viewBox='0 0 20 20'>
          <line
            vectorEffect='non-scaling-stroke'
            x1='9'
            y1='0'
            x2='20'
            y2='10'
          />
          <line
            vectorEffect='non-scaling-stroke'
            x1='9'
            y1='20'
            x2='20'
            y2='10'
          />
        </svg>
      </Box>
    </Grid>
  )
}

function WelcomeArrowMobile() {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'space-between',
        height: '100%',
        display: 'flex',
        animationDuration: '4000ms',
        animationPlayState: 'running',
        animationDelay: '1000ms',
        animationName: animateDown.toString(),
        animationIterationCount: 'infinite',
        mt: '1px',
      }}
    >
      <Box sx={{ flex: 0, width: '100%', height: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            stroke: 'primary',
            strokeWidth: 1,
            fill: 'none',
          }}
        >
          <svg x='0px' y='0px' width='23px' height='22px'>
            <circle vectorEffect='non-scaling-stroke' cx='11' cy='10' r='9' />
          </svg>
        </Box>
      </Box>
      <Box sx={{ height: '100%', transform: 'translateX(calc(50% - 1px))' }}>
        <Box
          sx={{
            height: '100%',
            width: '1px',
            mt: '-1px',
            pb: '5px',
            bg: 'primary',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
          top: '10px',
          mt: '-21px',
          width: '100%',
          height: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            stroke: 'primary',
            strokeWidth: 1,
            fill: 'none',
          }}
        >
          <svg x='0px' y='0px' width='23px' height='22px'>
            <line
              vectorEffect='non-scaling-stroke'
              x1='1'
              x2='11'
              y1='0'
              y2='10'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='21'
              x2='11'
              y1='0'
              y2='10'
            />
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default About
