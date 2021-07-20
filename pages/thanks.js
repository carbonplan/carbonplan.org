import { Box, Themed } from 'theme-ui'
import { Layout, Row, Column, Callout, Link } from '@carbonplan/components'
import Heading from '../components/heading'
import { Heart } from '@carbonplan/emoji'

const sx = {
  link: {
    textDecoration: 'none',
    display: 'block',
    width: 'fit-content',
    '@media (hover: none) and (pointer: coarse)': {
      '&:hover': {
        color: 'primary',
      },
    },
  },
}

const Thanks = () => {
  return (
    <Layout links={'homepage'} title={'thanks / carbonplan'}>
      <Box sx={{ mb: [8, 8, 9, 10] }}>
        <Heading sx={{ whiteSpace: 'nowrap' }}>Thank you</Heading>
        <Row>
          <Column start={[1, 1, 2, 2]} width={[6, 6, 6, 6]}>
            <Box as='p' variant='styles.p' sx={{ mt: [0] }}>
              We truly appreciate your generosity.
            </Box>
            <Themed.p>
              Follow us on{' '}
              <Link href='https://twitter.com/carbonplanorg'>
                @carbonplanorg
              </Link>{' '}
              or come back to this website anytime to see the latest updates on
              our work.
            </Themed.p>
          </Column>
          <Column start={[2, 2, 9, 9]} width={[4, 4, 2, 2]}>
            <Heart sx={{ width: '100%', height: 'auto', mt: [0, 0, -5, -5] }} />
          </Column>
        </Row>
        <Row sx={{ mt: [4, 5, 6, 7] }}>
          <Column start={[1, 2]} width={[6, 10]}>
            <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
              Read more
            </Box>
          </Column>
        </Row>
        <Row sx={{ mt: [4, 4, 5, 6], mb: [3, 5, 7, 8] }}>
          <Column start={[1, 3]} width={[3, 4, 2, 2]} sx={{ mb: [3, 0, 0, 0] }}>
            <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
              <Callout href='/research' label='research'>
                Browse our latest articles
              </Callout>
            </Box>
          </Column>
          <Column start={[4, 5, 5, 5]} width={[3, 4, 2, 2]}>
            <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
              <Callout href='/press' label='press'>
                View a list of press about our work
              </Callout>
            </Box>
          </Column>
          <Column start={[1, 7]} width={[3, 4, 2, 2]}>
            <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
              <Callout href='/team' label='team'>
                Read about our team and collaborators
              </Callout>
            </Box>
          </Column>
          <Column start={[4, 5, 9, 9]} width={[3, 4, 2, 2]}>
            <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
              <Callout href='https://github.com/carbonplan' label='github'>
                Check out our open source code
              </Callout>
            </Box>
          </Column>
        </Row>
      </Box>
    </Layout>
  )
}

export default Thanks
