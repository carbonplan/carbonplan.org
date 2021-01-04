import { Box, Text, Styled, Grid, Heading, Link } from 'theme-ui'
import { Layout } from '@carbonplan/components'

const sx = {
  header: {
    textTransform: 'uppercase',
    letterSpacing: 'smallcaps',
    fontFamily: 'heading',
    fontSize: [2],
    mt: ['3px'],
  },
  entry: {
    fontSize: [2],
    fontFamily: 'faux',
    letterSpacing: 'faux',
  },
}

const Funding = () => {
  return (
    <Layout local>
      <Box sx={{ maxWidth: '700px', mb: [6] }}>
        <Styled.h1>Funding</Styled.h1>
        <Styled.p>
          We receive a mix of unrestricted funding through donations and grants,
          and project-specific funding through contracts and grants. We are
          incredibly grateful to all of our donors, funders, and partners. Here
          we list all sources of funding greater than $1000 in either category.
          Funding for additional, ongoing projects will be listed in the future.
        </Styled.p>
        <Styled.h2>Unrestricted donations and funding</Styled.h2>
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
            <Text sx={sx.header}>Pamela Mensch</Text>
            <Text sx={sx.entry}>Individual donation</Text>
          </Row>
          <Row>
            <Text sx={sx.header}>Hampus Jakobsson</Text>
            <Text sx={sx.entry}>Individual donation</Text>
          </Row>
          <Row>
            <Text sx={sx.header}>Incite Labs</Text>
            <Text sx={sx.entry}>Grant</Text>
          </Row>
          <Row>
            <Text sx={sx.header}>Eutopia Foundation</Text>
            <Text sx={sx.entry}>Grant</Text>
          </Row>
        </Box>
        <Styled.h2>Project-specific funding</Styled.h2>
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
            <Text sx={sx.header}>Carbon 180</Text>
            <Text sx={sx.entry}>
              <Link href='https://medium.com/@carbon180/all-star-fellows-join-carbon180-7fdbd00eae3b'>
                Entrepreneur in Residence Fellowship
              </Link>
            </Text>
          </Row>
          <Row>
            <Text sx={sx.header}>Stripe</Text>
            <Text sx={sx.entry}>
              <Link href='/research/stripe-reports-insights'>
                Negative Emissions Purchase 2020
              </Link>
            </Text>
          </Row>
          <Row>
            <Text sx={sx.header}>WattTime</Text>
            <Text sx={sx.entry}>
              <Link href='https://www.climatetrace.org'>Climate TRACE</Link>
            </Text>
          </Row>
          <Row>
            <Text sx={sx.header}>Generation IM</Text>
            <Text sx={sx.entry}>
              Guidance on evaluating climate benefits from investments
            </Text>
          </Row>
        </Box>
      </Box>
    </Layout>
  )
}

function Row({ children }) {
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

export default Funding
