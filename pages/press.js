import { useState, useEffect } from 'react'
import { Box, Grid, Link } from 'theme-ui'
import {
  Tag,
  Row,
  Column,
  Guide,
  Layout,
  Arrow,
  Filter,
  Tray,
  utils,
} from '@carbonplan/components'
import { alpha } from '@theme-ui/color'
import Heading from '../components/heading'
import { press } from '../data/press'

const { formatDate } = utils

const sources = [...new Set(press.map((d) => d.source).flat())].sort((a, b) =>
  a.localeCompare(b)
)

const formats = ['print', 'audio', 'video']

const sourceColors = {}
const initSource = {}

let count = 0

for (const key of sources) {
  initSource[key] = true
  sourceColors[key] = ['green', 'teal', 'blue', 'purple'][count % 4]
  count += 1
}

const initFormat = {
  print: true,
  audio: true,
  video: true,
}

const initYear = {
  2020: true,
  2021: true,
}

const Press = () => {
  const [format, setFormat] = useState(initFormat)
  const [year, setYear] = useState(initYear)
  const [filtered, setFiltered] = useState(press)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setFiltered(
      press.filter((d) => {
        const inYear = year[new Date(d.date.replace(/-/g, '/')).getFullYear()]
        const inFormat = format[d.format]
        return inYear && inFormat
      })
    )
  }, [year, format])

  const FilterContents = () => {
    return (
      <Filter
        filters={{ format: format, year: year }}
        setFilters={{ format: setFormat, year: setYear }}
        filterLabels={{ format: 'Format', year: 'Year' }}
        filterList={['year', 'format']}
      />
    )
  }

  return (
    <Layout
      links={'homepage'}
      title={'press / carbonplan'}
      dimmer={'bottom'}
      settings={{ value: expanded, onClick: () => setExpanded(!expanded) }}
    >
      <Heading
        description={
          <span>
            A complete list of press that has either covered
            <Box
              as='br'
              sx={{ display: ['none', 'initial', 'initial', 'initial'] }}
            />{' '}
            our work or featured members of our team.
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
      <Row sx={{ mb: [8, 8, 9, 10] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 6, 2, 2]}
          sx={{ display: ['none', 'none', 'initial', 'intial'] }}
        >
          <Box sx={{ position: 'sticky', top: '76px', height: 'auto' }}>
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
  const { source, description, title, href, date, authors } = data

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
              color: 'secondary',
              fontSize: [1, 1, 1, 2],
              fontFamily: 'mono',
              letterSpacing: 'mono',
              textTransform: 'uppercase',
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
                      color: sourceColors[d],
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
