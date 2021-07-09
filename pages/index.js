import { Link, Box } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout, Row, Column, Buttons, Links } from '@carbonplan/components'
import { keyframes } from '@emotion/react'
import Splash from '../components/splash'
import Research1Figure from '../components/research-1-figure'
import Research2Figure from '../components/research-2-figure'
import Highlight from '../components/highlight'

import { research1, research2, highlights, press } from '../data/recent'

const { ArrowButton } = Buttons
const { WrappedLink } = Links

const sx = {
  borderTop: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
  },
  highlight: {
    mb: [3],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'secondary',
  },
}

const Index = () => {
  console.log(
    'process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: ',
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  )

  return (
    <Layout links={'homepage'} title={'carbonplan'}>
      <Box
        sx={{
          mt: [-1, 0, 0, 0],
          mb: [-1, 6, 7, 8],
        }}
      >
        <Splash />
      </Box>
      <Row as='section' sx={{ position: 'relative', mt: [1] }}>
        <Column
          start={[2, 2, 3, 3]}
          width={[1]}
          sx={{
            height: '100%',
            display: ['none', 'initial', 'initial', 'initial'],
          }}
        >
          <VerticalArrow />
        </Column>
        <Column start={[1, 4, 6, 6]} width={[6, 5, 6, 6]}>
          <Box
            as='h1'
            sx={{
              fontFamily: 'heading',
              lineHeight: ['1.025', 'heading', 'heading', 'heading'],
              fontWeight: 'heading',
              fontSize: [6, 6, 7, 8],
            }}
          >
            Data and science for climate action
          </Box>
          <Row columns={[6, 5, 6, 6]}>
            <Column start={[1]} width={[5, 4, 4, 4]}>
              <Box
                as='p'
                sx={{
                  fontSize: [3, 3, 3, 4],
                  lineHeight: '1.25',
                  pt: ['2px', 0, 0, 0],
                  mb: [2, 3, 0, 0],
                  mt: [3, 4, 4, 5],
                }}
              >
                Improving the transparency and scientific integrity of carbon
                removal and climate solutions through open data and tools
              </Box>
            </Column>
          </Row>
          <Box sx={{ mt: ['12px', 4, 4, 5] }}>
            <Row columns={[6, 5, 6, 6]}>
              <Column as='nav' start={[1]} width={[4, 6, 6, 6]}>
                <InternalNav href={'/about'}>About</InternalNav>
                <InternalNav href={'/research'}>Research</InternalNav>
                <InternalNav href={'/team'}>Team</InternalNav>
                <InternalNav href={'/faq'}>FAQ</InternalNav>
                <InternalNav href={'/donate'} final>
                  Donate
                </InternalNav>
              </Column>
            </Row>
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [5, 7, 8, 9] }}>
        <Column
          start={[1, 2]}
          width={[6, 8, 10, 10]}
          sx={{
            pt: [5, 6, 7, 8],
            ...sx.borderTop,
          }}
        />
      </Row>
      <Row sx={{}}>
        <Column
          start={[1, 2, 2, 3]}
          width={[6, 8, 10, 10]}
          sx={{
            ...sx.highlight,
          }}
        >
          Recent Research
        </Column>
      </Row>
      <Highlight research={research2} />
      <Research2Figure />
      <Box sx={{ display: 'block', height: [4, 5, 6, 7] }} />
      <Highlight research={research1} />
      <Research1Figure />
      <Row as='section' sx={{ mt: [5, 6, 7, 8], mb: [8, 8, 9, 10], pb: [1] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 8, 10, 10]}
          sx={{ pt: [5, 6, 7, 8], ...sx.borderTop }}
        >
          <Row columns={[6, 8, 10, 10]}>
            <Column start={[2, 2, 1, 1]} width={[5, 4, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                  }}
                >
                  Annual report
                </Box>
                <WrappedLink
                  href={
                    'https://carbonplan-assets.s3.amazonaws.com/docs/CarbonPlan-Annual-Report-2020.pdf'
                  }
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    mb: [3],
                    width: 'fit-content',
                  }}
                >
                  <ArrowButton label={'Our 2020 in review'} size={'md'} />
                </WrappedLink>
                <Box
                  sx={{
                    fontSize: [3, 3, 3, 4],
                    fontFamily: 'body',
                    letterSpacing: 'body',
                    lineHeight: '1.25',
                  }}
                >
                  Read all about the work we did in our first year, and some of
                  what we're planning to do next.
                </Box>
              </Box>
            </Column>
            <Column start={[2, 2, 5, 5]} width={[5, 3, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    mt: [6, 6, 0, 0],
                  }}
                >
                  Recent highlights
                </Box>
                {highlights.map((d, i) => (
                  <WrappedLink
                    key={i}
                    href={d.href}
                    sx={{
                      textDecoration: 'none',
                      display: 'block',
                      width: 'fit-content',
                    }}
                  >
                    <ArrowButton
                      key={i}
                      label={d.label}
                      size={'md'}
                      sx={{ mb: [1] }}
                    />
                  </WrappedLink>
                ))}
              </Box>
            </Column>
            <Column start={[2, 5, 8, 8]} width={[5, 3, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    mt: [6, 6, 0, 0],
                  }}
                >
                  Recent press
                </Box>
                {press.map((d, i) => (
                  <WrappedLink
                    key={i}
                    href={d.href}
                    sx={{
                      textDecoration: 'none',
                      display: 'block',
                      width: 'fit-content',
                    }}
                  >
                    <ArrowButton
                      key={i}
                      label={d.label}
                      size={'md'}
                      sx={{ mb: [1] }}
                    />
                  </WrappedLink>
                ))}
              </Box>
            </Column>
          </Row>
        </Column>
      </Row>
    </Layout>
  )
}

function InternalNav({ children, href, final = false }) {
  return (
    <NextLink href={href} passHref>
      <Link
        sx={{
          fontSize: [2, 3, 3, 4],
          textTransform: 'uppercase',
          fontFamily: 'heading',
          display: 'inline-block',
          letterSpacing: 'smallcaps',
          borderStyle: 'solid',
          borderColor: 'primary',
          borderWidth: '0px',
          borderBottomWidth: '1px',
          pb: [1],
          mr: [final ? 0 : 4],
          mb: [3, 2, 2, 2],
          color: 'primary',
          textDecoration: 'none',
          transition: 'border-color 0.15s, color 0.15s',
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': {
              borderColor: 'secondary',
              color: 'secondary',
            },
          },
          '@media (hover: none) and (pointer: coarse)': {
            '&:hover': {
              color: 'primary',
            },
          },
        }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const animate = keyframes({
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

function VerticalArrow() {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignContent: 'flex-end',
        display: 'flex',
        height: '100%',
        mt: ['-7px', '-7px', '-7px', '-78px'],
        transform: ['none', 'none', 'none', 'scale(1.4)'],
      }}
    >
      <Box
        sx={{
          display: 'block',
          alignSelf: 'flex-end',
          transform: 'translateY(0px)',
          animationDuration: '4000ms',
          animationPlayState: 'running',
          animationDelay: '1000ms',
          animationName: animate.toString(),
          animationIterationCount: 'infinite',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '112px',
            fill: 'none',
            stroke: 'primary',
          }}
        >
          <svg x='0px' y='0px' width='27px' height='100%'>
            <circle vectorEffect='non-scaling-stroke' cx='13' cy='11' r='9' />
            <line
              vectorEffect='non-scaling-stroke'
              x1='13'
              x2='13'
              y1='20'
              y2='111'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='2'
              x2='13'
              y1='100'
              y2='111'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='24'
              x2='13'
              y1='100'
              y2='111'
            />
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default Index
