import { Box, Divider, Styled, Text, Heading, Link } from 'theme-ui'
import { Layout } from '@carbonplan/components'

const Team = () => {
  return (
    <Layout links={'homepage'} title={'team / carbonplan'}>
      <Box sx={{ width: '100%' }}>
        <Text as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
          Team
        </Text>
        <Styled.h2>Core team</Styled.h2>
        <Box sx={{ fontSize: [3], pt: [2, 0, 0], pb: [1] }}>
          <Text as='p' sx={{ mb: [4, 4, 4], maxWidth: '700px' }}>
            Interested in joining our team? Check out our{' '}
            <Link href='https://apply.workable.com/carbonplan/'>
              job openings
            </Link>
            .
          </Text>
          <Person name='Jeremy Freeman' role='Founder / Executive Director' />
          <Person name='Joe Hamman' role='Technology Director' />
          <Person name='Danny Cullenward' role='Policy Director' />
          <Person name='Oriana Chegwidden' role='Research Scientist' />
          <Person name='Cindy Chiao' role='Data Scientist' />
          <Person name='Freya Chay' role='Policy Analyst' />
        </Box>
        <Divider sx={{ mt: [4] }} />
        <Heading as='h2' variant='styles.h2' sx={{ my: [4, 4, 4], pt: [1] }}>
          Board
        </Heading>
        <Box sx={{ fontSize: [3], pb: [1] }}>
          <Person name='Kelly Gannon' role='Global Fund for Women' />
          <Person
            name='Zeke Hausfather'
            role='Breakthrough Institute / Carbon Brief'
          />
        </Box>
        <Divider sx={{ mt: [4] }} />
        <Text as='h2' variant='styles.h2' sx={{ my: [4, 4, 4], pt: [1] }}>
          Collaborators
        </Text>
        <Box sx={{ fontSize: [3] }}>
          <Text as='p' sx={{ mb: [4], maxWidth: '700px' }}>
            We collaborate closely with a community of experts and advisors.
            Interested in working together? Email us{' '}
            <Link href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>
          </Text>
          <Box sx={{ mb: [3] }}>
            <Span sx={{ color: 'green' }}>BILL ANDEREGG</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              University of Utah
            </Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Span sx={{ color: 'green' }}>GRAYSON BADGLEY</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              Black Rock Forest Consortium / Columbia University
            </Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Span sx={{ color: 'green' }}>ANNA TRUGMAN</Span>
            <Text sx={{ color: 'secondary' }}>UC Santa Barbara</Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Span sx={{ color: 'green' }}>BARBARA HAYA</Span>
            <Text sx={{ color: 'secondary' }}>UC Berkeley</Text>
          </Box>
          <Box sx={{ mb: [3], letterSpacing: 'smallcaps' }}>
            <Span sx={{ color: 'purple' }}>JENNIFER WILCOX</Span> /{' '}
            <Span sx={{ color: 'purple' }}>NOAH MCQUEEN</Span> /{' '}
            <Span sx={{ color: 'purple' }}>CALEB WOODALL</Span> /{' '}
            <Span sx={{ color: 'purple' }}>HÉLÈNE PILORGÉ</Span> /{' '}
            <Span sx={{ color: 'purple' }}>BEN KOLOSZ</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              Worcester Polytechnic Institute
            </Text>
          </Box>
          <Box sx={{ mb: [3], letterSpacing: 'smallcaps' }}>
            <Span sx={{ color: 'purple' }}>ANDREW BERGMAN</Span> /{' '}
            <Span sx={{ color: 'purple' }}>TOLY RINBERG</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              Harvard University
            </Text>
          </Box>
          <Box sx={{ mb: [3], letterSpacing: 'smallcaps' }}>
            <Span sx={{ color: 'orange' }}>JENNIFER PETT-RIDGE</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              Lawrence Livermore National Laboratory
            </Text>
          </Box>
          <Box sx={{ mb: [3], letterSpacing: 'smallcaps' }}>
            <Span sx={{ color: 'orange' }}>ERIC SLESSAREV</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              Lawrence Livermore National Laboratory
            </Text>
          </Box>
          <Box sx={{ mb: [6] }}>
            <Span sx={{ color: 'orange' }}>JANE ZELIKOVA</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              Carbon180
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

function Span({ sx, children }) {
  return (
    <Text
      as='span'
      sx={{
        display: 'inline-block',
        letterSpacing: 'smallcaps',
        fontFamily: 'heading',
        ...sx,
      }}
    >
      {children}
    </Text>
  )
}

function Person({ name, role }) {
  return (
    <Box sx={{ mb: [3, 2, 2] }}>
      <Text
        as='span'
        sx={{
          fontFamily: 'heading',
          textTransform: 'uppercase',
          letterSpacing: 'smallcaps',
          display: 'inline-block',
          mr: [2],
        }}
      >
        {name}
      </Text>
      <Text
        as='span'
        sx={{
          color: 'secondary',
          display: ['block', 'inline-block', 'inline-block'],
        }}
      >
        {role}
      </Text>
    </Box>
  )
}

export default Team
