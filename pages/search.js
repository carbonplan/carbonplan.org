import { Box, Divider, Flex, IconButton } from 'theme-ui'
import {
  Layout,
  Row,
  Column,
  Link,
  Filter,
  formatDate,
  Input,
} from '@carbonplan/components'
import { X } from '@carbonplan/icons'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { PAGES } from '../data/pages'

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

const normalizeText = (str) => {
  if (!str) return ''
  return str?.toLowerCase()?.replace(/-/g, ' ')
}

const { search, ...STATIC_PAGES } = PAGES

const Search = ({ contents }) => {
  const router = useRouter()
  const inputRef = useRef(null)
  const [query, setQuery] = useState(router.query.query ?? null)
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
      .filter((c) => {
        if (!query) return true
        const terms = normalizeText(query).split(/\s+/).filter(Boolean)
        const result = [
          c.page,
          c.metadata.title,
          c.metadata.summary,
          ...(c.metadata.authors ?? []),
        ]
          .map(normalizeText)
          .join(' ')
        return terms.every((term) => result.includes(term))
      })
      .filter((c) =>
        filter.hasOwnProperty(c.metadata.type)
          ? filter[c.metadata.type]
          : filter.other
      )
      .sort(
        (a, b) => (new Date(b.date) - new Date(a.date)) * (sort.oldest ? -1 : 1)
      )
  }, [contents, sort, filter, query])

  useEffect(() => {
    if (router.isReady && router.query.query && typeof query !== 'string') {
      setQuery(router.query.query)
    }
  }, [router])

  useEffect(() => {
    if (typeof query === 'string') {
      router.replace(
        {
          pathname: '/search',
          query: { query },
        },
        undefined,
        {
          scroll: false,
          shallow: true,
        }
      )
    }
  }, [query])

  return (
    <Layout
      links={'homepage'}
      title={search.title}
      description={search.description}
    >
      <Row sx={{ mt: [5, 6, 7, 8], mb: [5, 6, 7, 8], ...sx }}>
        <Column start={[1, 2, 2, 2]} width={[6, 2, 3, 3]}>
          <Box as='h1' variant='styles.h1' sx={{ my: [0, 0, 0, 0] }}>
            Search
          </Box>
        </Column>
        <Column start={[1, 4, 5, 5]} width={[4, 4, 6, 6]}>
          <Flex
            sx={{
              display: ['none', 'flex', 'flex', 'flex'],
              height: '100%',
              alignItems: 'flex-end',
              pb: '4px',
            }}
          >
            {typeof query === 'string' &&
              `There are ${results.length} results that match your search.`}
          </Flex>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2, 2, 2]} width={[6, 2, 2, 2]}>
          <Flex sx={{ flexDirection: 'column', gap: 5 }}>
            <Box>
              <Box as='label'>
                <Box
                  as='span'
                  sx={{
                    ...sx.label,
                    display: ['none', 'inherit', 'inherit', 'inherit'],
                  }}
                >
                  Query
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <Input
                    ref={inputRef}
                    value={query ?? ''}
                    onChange={(e) => setQuery(e.target.value)}
                    size='xs'
                    sx={{
                      mt: ['-12px', 3, 3, 3],
                      width: '100%',
                      fontFamily: 'mono',
                      letterSpacing: 'mono',
                      fontSize: [1, 1, 1, 2],
                      textTransform: 'uppercase',
                    }}
                  />
                  <IconButton
                    onClick={() => {
                      setQuery('')
                      inputRef.current?.focus()
                    }}
                    aria-label='Clear search'
                    sx={{
                      p: 0,
                      position: 'absolute',
                      right: [-2, -2, -5, -5],
                      top: [-2, -1, 0, 0],
                      cursor: 'pointer',
                      color: 'secondary',
                      opacity: query ? 1 : 0,
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: 'primary',
                      },
                    }}
                  >
                    <X sx={{ width: 16 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Filter
              values={filter}
              setValues={setFilter}
              label='Filter by type'
              showAll
            />
            <Filter values={sort} setValues={setSort} label='Sort by' />
          </Flex>
        </Column>
        <Column start={[1, 4, 5, 5]} width={[6, 4, 5, 5]}>
          <Divider
            sx={{ my: 4, display: ['inherit', 'none', 'none', 'none'] }}
          />
          {results.length === 0 && (
            <Box sx={{ ...sx.label }}>No results found</Box>
          )}
          {typeof query === 'string' &&
            results.map(({ page, date, metadata }, i) => (
              <Box key={page}>
                {i > 0 && <Divider sx={{ my: 4 }} />}
                <Box sx={sx.label}>
                  {date && `${formatDate(date)} / `}
                  {getType(page, metadata)}
                </Box>
                <Box sx={{ variant: 'styles.h3', mt: 4, mb: 3 }}>
                  <Link
                    href={
                      page.includes('https://')
                        ? page
                        : `https://carbonplan.org/${page}`
                    }
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
    page: 'https://carbonplan.org/data/zarr-access',
    date: '2023-10-23',
    metadata: {
      title: 'Working with Zarr data',
      summary: 'Notes on accessing datasets stored in Zarr format.',
    },
  },
  {
    page: 'https://carbonplan.org/research/mcdr-tools',
    date: '2025-06-04',
    metadata: {
      title: 'Index of tools visualizing marine CDR efficiency and dynamics',
      summary: 'Notes on accessing datasets stored in Zarr format.',
    },
  },
  {
    page: 'https://carbonplan.org/research/mcdr-tools-about',
    date: '2025-06-04',
    metadata: {
      title: 'About the Marine CDR Tools',
      summary: 'Information about mCDR Efficiency Tools.',
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

  const contents = [
    ...research,
    ...blog,
    ...vcl,
    ...Object.entries(STATIC_PAGES).map(([page, { title, description }]) => ({
      page,
      metadata: { title, summary: description },
    })),
    ...EXTRA_CONTENT,
  ]
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
