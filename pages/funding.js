import { Box } from 'theme-ui'
import { Layout, Row, Column, Link, Heading } from '@carbonplan/components'
import AnnotatedTable from '../components/annotated-table'
import { unrestricted, projectSpecific, partners } from '../data/funding'

const Funding = () => {
  return (
    <Layout
      links={'homepage'}
      title={'Funding – CarbonPlan'}
      description={
        'Public list of all our sources of unrestricted or project-specific funding greater than $1000.'
      }
    >
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
            partners. Here we list all sources of funding greater than $1000 in
            either category (for individual donors an asterisk indicates that we
            received a matching donation from their company). We have also
            benefited from sponsored compute credits from Amazon Web Services
            and Microsoft Azure. Funding for additional, ongoing projects will
            be listed in the future. Read more in our Annual Reports (
            <Link href='https://files.carbonplan.org/CarbonPlan-Annual-Report-2020.pdf'>
              2020
            </Link>
            ,{' '}
            <Link href='https://files.carbonplan.org/CarbonPlan-Annual-Report-2021.pdf'>
              2021
            </Link>
            ,{' '}
            <Link href='https://files.carbonplan.org/CarbonPlan-Annual-Report-2022.pdf'>
              2022
            </Link>
            ) or our Form 990s (
            <Link href='https://files.carbonplan.org/CarbonPlan-Form-990-2020.pdf'>
              2020
            </Link>
            ,{' '}
            <Link href='https://files.carbonplan.org/CarbonPlan-Form-990-2021.pdf'>
              2021
            </Link>
            ).
          </Box>
        </Column>
      </Row>
      <Box sx={{ mb: [2, 3, 4, 5] }}>
        <AnnotatedTable heading='Unrestricted donations' data={unrestricted} />
      </Box>
      <AnnotatedTable heading='Partners' data={partners} widths={[2, 4]} />
      <AnnotatedTable
        heading='Project-specific funding'
        data={projectSpecific}
      />
    </Layout>
  )
}

export default Funding
