import { Box, Themed } from 'theme-ui'
import { Layout, Row, Column, Link } from '@carbonplan/components'
import Heading from '../components/heading'
import AnnotatedTable from '../components/annotated-table'
import { unrestricted, projectSpecific } from '../data/funding'

const Funding = () => {
  return (
    <Layout links={'homepage'} title={'funding / carbonplan'}>
      <Box sx={{ mb: [8, 8, 9, 10] }}>
        <Heading
          sidenote={
            <span>
              Interested in supporting our work? Make a{' '}
              <Link href='/donate'>donation</Link>.
            </span>
          }
        >
          Funding
        </Heading>
        <Row>
          <Column start={[1, 1, 2, 2]} width={[6, 6, 6, 6]}>
            <Box
              sx={{
                fontSize: [3, 3, 3, 4],
                fontFamily: 'body',
                lineHeight: 'body',
                letterSpacing: 'body',
              }}
            >
              We receive a mix of unrestricted funding through donations and
              grants, and project-specific funding through contracts and grants.
              We are incredibly grateful to all of our donors, funders, and
              partners. Here we list all sources of funding greater than $1000
              in either category. Funding for additional, ongoing projects will
              be listed in the future.
            </Box>
          </Column>
        </Row>
        <Box sx={{ mb: [2, 3, 4, 5] }}>
          <AnnotatedTable
            heading='Unrestricted donations'
            data={unrestricted}
          />
        </Box>
        <AnnotatedTable
          heading='Project-specific funding'
          data={projectSpecific}
          variant='narrow'
        />
      </Box>
    </Layout>
  )
}

export default Funding
