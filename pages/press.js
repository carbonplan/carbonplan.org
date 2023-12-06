import { useState, useEffect } from 'react'
import { Box, Grid, Link, Divider } from 'theme-ui'
import {
  Tag,
  Row,
  Column,
  Group,
  Layout,
  Filter,
  Tray,
  Heading,
  formatDate,
} from '@carbonplan/components'
import { Arrow } from '@carbonplan/icons'
import { highlights, press } from '../data/press'
import {
  Bloomberg,
  LosAngelesTimes,
  NationalGeographic,
  CBSNews,
  WashingtonPost,
} from '../components/press-logos'

const sx = {
  highlight: {
    mb: [3, 3, 3, 4],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'secondary',
  },
  date: {
    color: 'secondary',
    fontSize: [1, 1, 1, 2],
    fontFamily: 'mono',
    letterSpacing: 'mono',
    textTransform: 'uppercase',
    transition: 'opacity 0.15s',
  },
}

const logos = {
  'Los Angeles Times': <LosAngelesTimes />,
  Bloomberg: <Bloomberg />,
  'National Geographic': <NationalGeographic />,
  'CBS News': <CBSNews />,
  'Washington Post': <WashingtonPost />,
}

const getColors = () => {
  const colorOrder = ['green', 'teal', 'blue', 'purple']
  const highlightSources = [...new Set(highlights.map((d) => d.source))]
  const sources = [...new Set(press.map((d) => d.source).flat())]

  const highlightColors = highlightSources.reduce((colors, source, i) => {
    colors[source] = colorOrder[i % 4]
    return colors
  }, {})

  const recentSources = sources.slice(0, 4)
  const fixedColorCount = recentSources.reduce(
    (count, s) => {
      if (highlightColors[s]) count[highlightColors[s]] += 1
      return count
    },
    colorOrder.reduce((a, c) => {
      a[c] = 0
      return a
    }, {})
  )

  const recentColors = recentSources.reduce((colors, source, i) => {
    if (highlightColors[source]) {
      colors[source] = highlightColors[source]
    } else {
      let leastUsedColor
      let colorUses

      Object.keys(fixedColorCount).forEach((c) => {
        if (!leastUsedColor || fixedColorCount[c] < colorUses) {
          leastUsedColor = c
          colorUses = fixedColorCount[c]
        }
      })
      fixedColorCount[leastUsedColor] += 1
      colors[source] = leastUsedColor
    }
    return colors
  }, {})

  return sources
    .sort((a, b) => b.localeCompare(a))
    .reduce(
      (colors, source, i) => {
        colors[source] ||= colorOrder[i % 4]
        return colors
      },
      { ...highlightColors, ...recentColors }
    )
}

const SOURCE_COLORS = getColors()

const initFormat = {
  print: true,
  audio: true,
  video: true,
}

const getCurrentYear = () => new Date().getFullYear()

const Press = () => {
  const [format, setFormat] = useState(initFormat)
  const [years, setYears] = useState(() => {
    const currentYear = getCurrentYear()
    const initYear = {}
    for (let year = 2020; year <= currentYear; year++) {
      initYear[year] = true
    }
    return initYear
  })
  const [filtered, setFiltered] = useState(press)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setFiltered(
      press.filter((d) => {
        const inYear = years[new Date(d.date.replace(/-/g, '/')).getFullYear()]
        const inFormat = format[d.format]
        return inYear && inFormat
      })
    )
  }, [years, format])

  const FilterContents = () => {
    return (
      <Group spacing='md'>
        <Filter
          values={years}
          setValues={setYears}
          label='Filter by year'
          showAll
        />
        <Filter
          values={format}
          setValues={setFormat}
          label='Filter by format'
          showAll
        />
      </Group>
    )
  }

  return (
    <Layout
      links={'homepage'}
      title={'Press – CarbonPlan'}
      description={
        'Complete list of press that has either covered our work or featured members of our team.'
      }
      dimmer={'bottom'}
      settings={{ value: expanded, onClick: () => setExpanded(!expanded) }}
      nav={'press'}
    >
      <Heading
        sidenote={
          <span>
            For media inquiries,{' '}
            <Box as='span' sx={{ whiteSpace: 'nowrap' }}>
              contact{' '}
              <Link href='mailto:press@carbonplan.org'>
                press@carbonplan.org
              </Link>
            </Box>
            .
          </span>
        }
      >
        Press
      </Heading>
      <Tray expanded={expanded}>
        <Row columns={[6]}>
          <Column start={[1]} width={[6, 4, 4, 4]}>
            <FilterContents />
          </Column>
        </Row>
      </Tray>
      <Row sx={{ mb: [4, 5, 6, 7] }}>
        <Column start={[1, 1, 2, 2]} width={[5]}>
          <Box sx={sx.highlight}>Press highlights</Box>
        </Column>
        {highlights.map((d, i) => {
          return (
            <Column
              key={i}
              start={[1 + (i % 2) * 3, 1 + i * 2, 2 + i * 2, 2 + i * 2]}
              width={[3, 2, 2, 2]}
              sx={{
                display: i < 4 ? 'block' : ['none', 'none', 'block', 'block'],
              }}
            >
              <Link
                href={d.href}
                sx={{
                  display: 'block',
                  mb: [4, 0, 0, 0],
                  textDecoration: 'none',
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover > #logo': {
                      opacity: 0.7,
                    },
                    '&:hover > #date': {
                      opacity: 0.7,
                    },
                  },
                }}
              >
                <Box
                  id='logo'
                  sx={{
                    opacity: 1,
                    position: 'relative',
                    width: '100%',
                    height: ['150px', '150px', '125px', '150px'],
                    py: [2],
                    px: [2],
                    transition: 'opacity 0.15s',
                  }}
                >
                  <Box
                    sx={{
                      opacity: 0.5,
                      position: 'absolute',
                      bg: SOURCE_COLORS[d.source],
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                  {logos[d.source]}
                </Box>
                <Box id='date' sx={{ ...sx.date, mt: [2, 2, 2, 3] }}>
                  {formatDate(d.date)}
                </Box>
              </Link>
            </Column>
          )
        })}
      </Row>
      <Row>
        <Column start={[1, 1, 2, 2]} width={[6, 8, 10, 10]}>
          <Divider
            sx={{
              mt: [0],
              mb: [4, 5, 6, 7],
              display: ['none', 'block', 'block', 'block'],
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 2, 2]}
          sx={{ display: ['none', 'none', 'initial', 'intial'] }}
        >
          <Box
            sx={{
              position: 'sticky',
              top: ['106px', '106px', '106px', '120px'],
              height: 'auto',
            }}
          >
            <FilterContents />
          </Box>
        </Column>
        <Column start={[1, 2, 5, 5]} width={[6, 7, 7, 7]}>
          <Box sx={{ mt: ['-3px', '-3px', '-3px', '0px'], mb: [3, 0, 0, 0] }}>
            <Row columns={[1, 7, 7, 7]}>
              {filtered.map((d, i) => {
                return (
                  <Column
                    key={i}
                    start={[
                      1,
                      i % 2 === 0 ? 1 : 5,
                      i % 2 === 0 ? 1 : 5,
                      i % 2 === 0 ? 1 : 5,
                    ]}
                    width={[3, 3, 3, 3]}
                  >
                    <Item data={d} final={i == press.length - 1} />
                  </Column>
                )
              })}
            </Row>
          </Box>
        </Column>
      </Row>
    </Layout>
  )
}

function Item({ data, final = false }) {
  const { source, title, href, date, authors } = data

  const sources = Array.isArray(source) ? source : [source]

  return (
    <Link
      sx={{
        textDecoration: 'none',
        display: 'block',
        transition: 'opacity 0.15s',
        opacity: 1,
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover > #container > #title > #span-1 > #span-2 > #arrow': {
            transform: 'rotate(45deg)',
          },
          '&:hover > #container': {},
          '&:hover': {
            opacity: 0.6,
            color: 'primary',
          },
        },
        '@media (hover: none) and (pointer: coarse)': {
          '&:hover': {
            color: 'primary',
          },
        },
      }}
      href={href}
    >
      <Box
        id='container'
        sx={{
          ml: [0, -5, -5, -6],
          mr: [0, 0, 0, 0],
          pr: [0, 0, 0, 0],
          pl: [0, 5, 5, 6],
          pt: [3, 0, 0, 0],
          mb: [0, 5, 6, 7],
          pb: [2, 0, 0, 0],
          transition: 'border-color 0.15s',
          borderStyle: 'solid',
          borderWidth: '0px',
          borderLeftWidth: ['0px', '1px', '1px', '1px'],
          borderTopWidth: ['1px', '0px', '0px', '0px'],
          borderColor: 'muted',
        }}
      >
        <Grid
          columns={['100px 1fr', '100px 1fr', '100px 1fr', '120px 1fr']}
          gap={[0]}
          sx={{ mt: ['-1px'] }}
        >
          <Box
            sx={{
              ...sx.date,
              mt: '4px',
            }}
          >
            {formatDate(date)}
          </Box>
          <Box
            sx={{
              mt: ['1px', '1px', '1px', '2px'],
              textAlign: 'right',
              width: '100%',
            }}
          >
            {sources.map((d, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    display: 'inline-block',
                    ml: [3],
                    mb: [1],
                    mt: ['-1px'],
                  }}
                >
                  <Tag
                    sx={{
                      pb: ['3px'],
                      lineHeight: 1.8,
                      textAlign: 'right',
                      width: 'fit-content',
                      display: 'initial',
                      color: SOURCE_COLORS[d],
                    }}
                  >
                    {d}
                  </Tag>
                </Box>
              )
            })}
          </Box>
        </Grid>
        <Box
          id='title'
          sx={{
            fontSize: [2, 2, 2, 3],
            mt: ['9px', '9px', '9px', '12px'],
            pb: [2],
            mb: [1],
            lineHeight: 'body',
          }}
        >
          <span id='span-1'>
            {title
              .split(' ')
              .slice(0, title.split(' ').length - 1)
              .join(' ')}{' '}
            <Box as='span' id='span-2' sx={{ whiteSpace: 'nowrap' }}>
              {title
                .split(' ')
                .slice(title.split(' ').length - 1, title.split(' ').length)}
              <Arrow
                id='arrow'
                sx={{
                  transition: '0.15s',
                  position: 'relative',
                  top: ['2px', '2px', '2px', '2px'],
                  ml: [2],
                  width: ['12px', '12px', '12px', '13px'],
                  height: ['12px', '12px', '12px', '13px'],
                  fill: 'primary',
                }}
              />
            </Box>
          </span>
        </Box>
        {authors.length > 0 && (
          <Box
            id='authors'
            sx={{
              mt: [2, 2, 2, '10px'],
              mb: [2],
              pb: [1],
              color: 'text',
            }}
          >
            <Box
              as='span'
              id='authors-span'
              sx={{
                letterSpacing: 'body',
                fontFamily: 'body',
                fontSize: [2, 2, 2, 3],
                color: 'secondary',
              }}
            >
              by {authors.join(' + ')}
            </Box>
          </Box>
        )}
      </Box>
    </Link>
  )
}

export default Press
