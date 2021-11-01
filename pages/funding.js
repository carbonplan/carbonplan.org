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
              in either category. We have also benefited from sponsored compute
              credits from Amazon Web Services and Microsoft Azure. Funding for
              additional, ongoing projects will be listed in the future. Read
              more in our{' '}
              <Link href='https://files.carbonplan.org/CarbonPlan-Annual-Report-2020.pdf'>
                2020 Annual Report
              </Link>{' '}
              or our{' '}
              <Link href='https://files.carbonplan.org/CarbonPlan-Form-990-2020.pdf'>
                2020 Form 990
              </Link>
              .
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
