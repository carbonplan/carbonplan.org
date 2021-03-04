import { Box, Styled, Text, Link, Divider, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout } from '@carbonplan/components'

const data = [
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063723981/',
    date: '02-02-2021',
    title: 'Burned by carbon pricing, Dems chart new course on climate',
    authors: ['Benjamin Storrow', 'Adam Aton']
  },
  {
    source: 'Financial Times',
    href: 'https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8',
    date: '01-27-2021',
    title: 'Carney task force confronts concerns over carbon credits market',
    authors: ['Camilla Hodgson'],
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063723085/',
    date: '01-21-2021',
    title: 'Does carbon pricing work? Researchers are skeptical',
    authors: ['Chelsea Harvey']
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/audio/2020-12-21/cullenward-the-jury-is-still-out-on-carbon-credits',
    date: '12-21-2020',
    title: 'The jury is still out on carbon credits',
    authors: [],
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
    source: 'New York Times',
    href: 'https://www.nytimes.com/2020/12/12/opinion/sunday/biden-climate-change-al-gore.html',
    date: '12-12-2020',
    title: 'Where I find hope',
    authors: ['Al Gore']
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
    source: 'GreenBiz',
    href: 'https://www.greenbiz.com/article/quest-carbon-offsets-almost-anything-goes',
    date: '11-30-2020',
    title: 'In the quest for carbon offsets, (almost) anything goes',
    authors: ['Jesse Klein']
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
    source: 'Time Magazine',
    href: 'https://time.com/collection/best-inventions-2020/5911362/climate-trace/',
    date: '11-19-2020',
    title: 'The best inventions of 2020: The climate cop',
    authors: [],
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
  {
    source: 'Rolling Stone',
    href: 'https://www.rollingstone.com/politics/politics-features/tree-planting-wont-stop-climate-crisis-1020500/',
    date: '06-25-2020',
    title: 'Why planting trees won’t save us',
    authors: ['Jeff Goodell']
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063394847/',
    date: '06-16-2020',
    title: 'Bleak cap-and-trade results raise doubts about program',
    authors: ['Anne C. Mulkern']
  },
  {
    source: 'MIT Technology Review',
    href: 'https://www.technologyreview.com/2020/06/03/1002484/why-we-cant-count-on-carbon-sucking-farms-to-slow-climate-change/',
    date: '06-03-2020',
    title: 'Why we can’t count on carbon-sucking farms to slow climate change',
    authors: ['James Temple']
  }
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
          {data.map((d, i) => {
            return <Item key={'press-' + i} data={d} />
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
              mb: authors.length > 0 ? [2] : [1],
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
        {(authors.length > 0) && <Box
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
        }
        <Box sx={{ fontSize: [3], mt: authors.length > 0 ? [2] : [1], mb: [2], color: 'secondary' }}>{source}</Box>
      </Box>
    </Box>
  )
}

export default Press
