import { Box, Divider, Flex } from 'theme-ui'
import {
  Layout,
  Row,
  Column,
  Link,
  Heading,
  Filter,
  formatDate,
  Input,
} from '@carbonplan/components'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'

const sx = {
  label: {
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [1, 1, 1, 2],
    color: 'secondary',
    userSelect: 'none',
    textTransform: 'uppercase',
  },
}

const Search = ({ contents }) => {
  const router = useRouter()
  const [sort, setSort] = useState({
    newest: true,
    oldest: false,
  })
  const [filter, setFilter] = useState({
    article: true,
    tool: true,
    blog: true,
    commentary: true,
    other: true,
  })

  const results = useMemo(() => {
    return contents
      .filter((c) => c.date)
      .filter((c) =>
        router.query.query
          ? [
              c.page,
              c.metadata.title,
              c.metadata.summary,
              ...(c.metadata.authors ? c.metadata.authors : []),
            ].some((text) =>
              text?.toLowerCase().includes(router.query.query.toLowerCase())
            )
          : true
      )
      .filter((c) =>
        filter.hasOwnProperty(c.metadata.type)
          ? filter[c.metadata.type]
          : filter.other
      )
      .sort(
        (a, b) => (new Date(b.date) - new Date(a.date)) * (sort.oldest ? -1 : 1)
      )
  }, [contents, sort, filter, router.query.query])

  return (
    <Layout
      links={'homepage'}
      title={'Search – CarbonPlan'}
      description={
        'Public list of all our sources of unrestricted or project-specific funding greater than $1000.'
      }
    >
      <Heading
        description={`There ${results.length} results that match your search.`}
      >
        Search
      </Heading>
      <Row>
        <Column start={[1, 1, 2, 2]} width={[6, 6, 2, 2]}>
          <Flex sx={{ flexDirection: 'column', gap: 5 }}>
            <Box>
              <Box as='label' sx={sx.label}>
                Query
                <Input
                  value={router.query.query ?? ''}
                  onChange={(e) =>
                    router.replace(
                      {
                        pathname: '/search',
                        query: { query: e.target.value },
                      },
                      undefined,
                      {
                        scroll: false,
                        shallow: true,
                      }
                    )
                  }
                  size='xs'
                  sx={{
                    mt: 3,
                    width: '100%',
                    fontFamily: 'mono',
                    letterSpacing: 'mono',
                    fontSize: [1, 1, 1, 2],
                    textTransform: 'uppercase',
                  }}
                />
              </Box>
            </Box>
            <Filter values={sort} setValues={setSort} label='Sort by' />
            <Filter
              values={filter}
              setValues={setFilter}
              label='Filter by type'
              showAll
            />
          </Flex>
        </Column>
        <Column start={[1, 1, 5, 5]} width={[6, 5, 5, 5]}>
          {results.map(({ page, date, metadata }) => (
            <Box key={page}>
              <Box sx={sx.label}>
                {date && formatDate(date)} / {metadata.type}
              </Box>
              <Box sx={{ variant: 'styles.h3', mt: 4, mb: 3 }}>
                <Link
                  href={`https://carbonplan.org/${page}`}
                  sx={{ textDecoration: 'none' }}
                >
                  {metadata.title}
                </Link>
              </Box>
              <Box sx={{ mb: 3 }}>{metadata.summary}</Box>
              <Box sx={sx.label}>{metadata.authors?.join(' + ')}</Box>
              <Divider sx={{ my: 4 }} />
            </Box>
          ))}
        </Column>
      </Row>
    </Layout>
  )
}

export default Search

export const getStaticProps = async () => {
  const [research, blog] = await Promise.all([
    fetch(
      'https://research-git-katamartin-metadata-carbonplan.vercel.app/research/contents.json'
    ).then((res) => res.json()),
    fetch(
      'https://blog-git-katamartin-metadata-carbonplan.vercel.app/blog/contents.json'
    ).then((res) => res.json()),
  ])

  const contents = [...research, ...blog]
    .filter((el) => el.metadata)
    .map((el) =>
      el.metadata.authors
        ? {
            ...el,
            metadata: {
              ...el.metadata,
              authors: el.metadata.authors.map((a) =>
                typeof a === 'string' ? a : a.name
              ),
            },
          }
        : el
    )
  return {
    props: { contents },
    // Next.js will invalidate the cache when a
    // request comes in, at most once every hour.
    revalidate: 60 * 60,
  }
}
