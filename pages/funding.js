import Layout from '../components/layout'
import { Box, Text, Grid, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

const Row = ({ children }) => {
  return (
    <Grid
      columns={[1, '250px 1fr', '250px 1fr']}
      sx={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderTopWidth: '1px',
        borderColor: 'muted',
        pt: [3],
        pb: ['22px', 3, 3],
      }}
    >
      {children}
    </Grid>
  )
}

const header = {
  textTransform: 'uppercase',
  letterSpacing: 'wide',
  fontFamily: 'heading',
  fontSize: [2],
  mt: ['3px'],
}

const entry = {
  fontSize: [2],
  fontFamily: 'faux',
  letterSpacing: 'faux',
}

function Funding() {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px', mb: [6] }}>
        <Heading sx={{ my: [4, 4, 5], fontSize: [6, 7, 7] }}>Funding</Heading>
        <Text sx={{ fontSize: [3], mb: [4] }}>
          We receive a mix of unrestricted funding through donations and grants,
          and project-specific funding through contracts and grants. We are
          incredibly grateful to all of our donors, funders, and partners. Here
          we list all sources of funding greater than $1000 in either category.
          Funding for additional, ongoing projects will be listed in the future.
        </Text>
        <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
          Unrestricted donations and funding
        </Heading>
        <Box
          sx={{
            maxWidth: '600px',
            borderStyle: 'solid',
            borderWidth: '0px',
            borderBottomWidth: '1px',
            borderColor: 'muted',
          }}
        >
          <Row>
            <Text sx={header}>Pamela Mensch</Text>
            <Text sx={entry}>Individual donation</Text>
          </Row>
          <Row>
            <Text sx={header}>Hampus Jakobsson</Text>
            <Text sx={entry}>Individual donation</Text>
          </Row>
          <Row>
            <Text sx={header}>Incite Labs</Text>
            <Text sx={entry}>Grant</Text>
          </Row>
          <Row>
            <Text sx={header}>Eutopia Foundation</Text>
            <Text sx={entry}>Grant</Text>
          </Row>
        </Box>
        <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
          Project-specific funding
        </Heading>
        <Box
          sx={{
            maxWidth: '600px',
            borderStyle: 'solid',
            borderWidth: '0px',
            borderBottomWidth: '1px',
            borderColor: 'muted',
          }}
        >
          <Row>
            <Text sx={header}>Carbon 180</Text>
            <Text sx={entry}>
              <Link href='https://medium.com/@carbon180/all-star-fellows-join-carbon180-7fdbd00eae3b'>
                Entrepreneur in Residence Fellowship
              </Link>
            </Text>
          </Row>
          <Row>
            <Text sx={header}>Stripe</Text>
            <Text sx={entry}>
              <Link href='/research/stripe-reports-insights'>
                Negative Emissions Purchase 2020
              </Link>
            </Text>
          </Row>
          <Row>
            <Text sx={header}>WattTime</Text>
            <Text sx={entry}>
              <Link href='https://www.climatetrace.org'>Climate TRACE</Link>
            </Text>
          </Row>
        </Box>
      </Box>
    </Layout>
  )
}

export default Funding
