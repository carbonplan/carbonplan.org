import Layout from '../components/layout'
import Carbon from '../components/carbon'
import { getArticles } from '../lib/articles'
import { Box, Text, Heading, Link, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'

const link = {
  width: 'fit-content',
  fontSize: [4],
  borderStyle: 'solid',
  borderColor: 'background',
  borderWidth: '0px',
  borderBottomWidth: '1px',
  display: 'block',
  '&:hover': {
    borderColor: 'primary'
  }
}

function Research ({ data }) {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px'}}>
        <Heading sx={{ my: [5], fontSize: [6] }}>
          Research
        </Heading>
        <Box sx={{ my: [4] }}>
          <Heading sx={{ my: [3], fontSize: [5] }}>
            Notes
          </Heading>
          {data
            .filter(({ type }) => (type == 'note'))
            .map(({ id, type, title, author, date }) => (
            <Box sx={{ my: [3] }} key={id}>
              <Text sx={{ my: [1], fontSize: [3] }}>
                {title}
              </Text>
              <Text>
                by {author}
              </Text>
              <Text>
                {date}
              </Text>
              <NextLink 
                href='/research/notes/[id]' 
                as={`/research/notes/${id}`}
              >
                <Link>link</Link>
              </NextLink>
            </Box>
          ))}
        </Box>
        <Box sx={{ my: [4] }}>
          <Heading sx={{ my: [3], fontSize: [5] }}>
            Primers
          </Heading>
          {data
            .filter(({ type }) => (type == 'primer'))
            .map(({ id, type, title, author, date }) => (
            <Box sx={{ my: [3] }} key={id}>
              <Text sx={{ my: [1], fontSize: [3] }}>
                {title}
              </Text>
              <Text>
                by {author}
              </Text>
              <Text>
                {date}
              </Text>
              <NextLink 
                href='/research/primers/[id]' 
                as={`/research/primers/${id}`}
              >
                <Link>link</Link>
              </NextLink>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = getArticles()
  return {
    props: {
      data
    }
  }
}

export default Research