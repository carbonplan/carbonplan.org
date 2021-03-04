import { Box, Styled, Text, Link, Divider, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout } from '@carbonplan/components'

const data = [
  {
    source: 'Financial Times',
    href: 'https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8',
    date: '01-27-2021',
    title: 'Carney task force confronts concerns over carbon credits market',
    authors: ['Camilla Hodgson'],
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/audio/2020-12-21/cullenward-the-jury-is-still-out-on-carbon-credits',
    date: '12-21-2020',
    title: 'The jury is still out on carbon credits',
    authors: ['Ben Elgin'],
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/features/2020-12-17/the-real-trees-delivering-fake-climate-progress-for-corporate-america',
    date: '12-17-2020',
    title: 'The real trees delivering fake corporate climate progress',
    authors: ['Ben Elgin', 'Zachary Mider'],
  },
  {
    source: 'Bloomberg Green',
    href:
      'https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/',
    date: '12-09-2020',
    title: 'These trees are not what they seem',
    authors: ['Ben Elgin'],
  },
  {
    source: 'Ars Technica',
    href:
      'https://arstechnica.com/science/2020/11/want-to-offset-your-carbon-footprint-heres-what-you-need-to-know/',
    date: '11-25-2020',
    title: 'Want to offset your carbon footprint? Here’s what you need to know',
    authors: ['Scott K. Johnson'],
  },
  {
    source: 'Grist',
    href:
      'https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/',
    date: '09-18-2020',
    title:
      'This Oregon forest was supposed to store carbon for 100 years. Now it’s on fire.',
    authors: ['Emily Pontecorvo', 'Shannon Osaka'],
  },
]

const Press = () => {
  return (
    <Layout links={'homepage'} title={'press / carbonplan'}>
      <Box sx={{ mb: [5] }}>
        <Box as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
          Press
        </Box>
        <Box sx={{ maxWidth: ['100%', '100%', '450px'], mb: [4] }}>
          <Styled.p>
            A complete list of press that has either covered our work or
            featured members of our team.
          </Styled.p>
        </Box>
        <Grid
          columns={[1, 1, 2]}
          sx={{ rowGap: '16px', columnGap: [0, 0, '64px'], mb: [4, 4, 5] }}
        >
          {data.map((d) => {
            return <Item data={d} />
          })}
        </Grid>
      </Box>
    </Layout>
  )
}

function Item({ data }) {
  const { source, description, title, href, date, authors } = data

  return (
    <Box>
      <Box id='container' sx={{ py: [3] }}>
        <Box
          sx={{
            color: 'secondary',
            fontSize: [2],
            fontFamily: 'mono',
            letterSpacing: 'mono',
          }}
        >
          {date}
        </Box>
        <Link
          sx={{
            textDecoration: 'none',

            '&:hover > #container > #arrow': {
              transform: 'rotate(45deg)',
            },
          }}
          href={href}
        >
          <Box
            id='container'
            sx={{
              maxWidth: '500px',
              fontSize: [4],
              mt: [2],
              mb: [2],
              pb: [1],
              lineHeight: '1.2em',
            }}
          >
            <Box as='span' sx={{ transition: '0.15s' }}>
              {title}
            </Box>
            <Box
              as='span'
              id='arrow'
              sx={{
                ml: [2],
                fontSize: [5],
                position: 'relative',
                top: '4px',
                display: 'inline-block',
                lineHeight: 0,
                left: '0px',
                transition: '0.15s',
              }}
            >
              ↗
            </Box>
          </Box>
        </Link>
        <Box
          id='authors'
          sx={{
            fontSize: [2],
            mt: [0],
            mb: [2],
            pb: [1],
            color: 'text',
          }}
        >
          <Box
            as='span'
            id='authors-span'
            sx={{
              textTransform: 'uppercase',
              letterSpacing: 'smallcaps',
              fontFamily: 'heading',
              transition: '0.15s',
            }}
          >
            by {authors.join(' + ')}
          </Box>
        </Box>
        <Box sx={{ fontSize: [3], my: [2], color: 'secondary' }}>{source}</Box>
      </Box>
    </Box>
  )
}

export default Press
