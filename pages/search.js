import { Box, Divider, Flex } from 'theme-ui'
import {
  Layout,
  Row,
  Column,
  Link,
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

const getType = (page, metadata) => {
  let type = 'other'
  if (page.includes('research/cdr-verification/')) {
    return 'Verification Framework Tool'
  } else if (metadata.type === 'commentary' && page.includes('files.')) {
    type = 'comment letter'
  } else if (metadata.type) {
    type = metadata.type
  }
  return type
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
          : false
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
        'Search for research and other resources across the CarbonPlan website.'
      }
    >
      <Row sx={{ mt: [5, 6, 7, 8], mb: [5, 6, 7, 8], ...sx }}>
        <Column start={[1, 1, 2, 2]} width={[6, 6, 3, 3]}>
          <Box as='h1' variant='styles.h1' sx={{ my: [0, 0, 0, 0] }}>
            Search
          </Box>
        </Column>
        <Column start={[1, 1, 5, 5]} width={[6]}>
          <Flex
            sx={{
              height: '100%',
              alignItems: 'flex-end',
              pb: '4px',
            }}
          >
            {router.query.query
              ? `There are ${results.length} results that match your search.`
              : 'Enter a search query below to view results.'}
          </Flex>
        </Column>
      </Row>
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
          {results.map(({ page, date, metadata }, i) => (
            <Box key={page}>
              {i > 0 && <Divider sx={{ my: 4 }} />}
              <Box sx={sx.label}>
                {date && formatDate(date)} / {getType(page, metadata)}
              </Box>
              <Box sx={{ variant: 'styles.h3', mt: 4, mb: 3 }}>
                <Link
                  href={`https://carbonplan.org/${page}`}
                  sx={{ textDecoration: 'none' }}
                >
                  {metadata.title}
                </Link>
              </Box>

              <Box>{metadata.summary}</Box>

              {metadata.authors?.length > 0 && (
                <Box sx={{ ...sx.label, mt: 3 }}>
                  {metadata.authors?.join(' + ')}
                </Box>
              )}
            </Box>
          ))}
        </Column>
      </Row>
    </Layout>
  )
}

export default Search

const EXTRA_CONTENT = [
  {
    page: 'https://docs.carbonplan.org',
    date: '2021-10-29',
    metadata: {
      title: 'CarbonPlan Docs',
      summary: "Documentation for the software projects we're building.",
    },
  },
  {
    page: 'https://carbonplan.org/data',
    date: '2024-03-08',
    metadata: {
      title: 'CarbonPlan datasets',
      summary:
        'A catalog of public datasets produced throughout our work. Not a frequently updated resource.',
    },
  },
  {
    page: 'https://carbonplan.org/data/zarr-access',
    date: '2023-10-23',
    metadata: {
      title: 'Working with Zarr data',
      summary: 'Notes on accessing datasets stored in Zarr format.',
    },
  },
]

export const getStaticProps = async () => {
  const [research, blog, vcl] = await Promise.all([
    fetch(
      'https://research-git-katamartin-metadata-carbonplan.vercel.app/research/contents.json'
    ).then((res) => res.json()),
    fetch(
      'https://blog-git-katamartin-metadata-carbonplan.vercel.app/blog/contents.json'
    ).then((res) => res.json()),
    fetch(
      'https://cdr-mrv-git-katamartin-metadata-carbonplan.vercel.app/research/cdr-verification/contents.json'
    ).then((res) => res.json()),
  ])

  const contents = [...research, ...blog, ...vcl, ...EXTRA_CONTENT]
    .filter((el) => el.metadata)
    .map((el) =>
      el.metadata.authors
        ? {
            ...el,
            metadata: {
              ...el.metadata,
              // normalize authors to remove collaborator avatar configuration
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
