import Layout from '../../../components/layout'
import { getArticleIds, getArticleData } from '../../../lib/articles'
import { Box, Text, Heading, Link, Grid } from 'theme-ui'

function Note ({ data }) {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px'}}>
        <Heading sx={{ my: [5], fontSize: [6] }}>
          Heading
        </Heading>
        <Text sx={{ my: [1], fontSize: [3] }}>
          {data.title}
        </Text>
        <Text>
          by {data.author}
        </Text>
        <Text>
          {data.date}
        </Text>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getArticleIds('notes')
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = getArticleData('notes', params.id)
  return {
    props: {
      data
    }
  }
}

export default Note