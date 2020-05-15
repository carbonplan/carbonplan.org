/** @jsx jsx */
import Layout from '../components/layout'
import { jsx, Box, Divider, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function Resources () {
  return (
    <Layout>
      <Box sx={{ width: '100%' }}>
        <Heading sx={{ my: [4, 4, 5], fontSize: [7] }}>
          Team
        </Heading>
        <Heading sx={{ my: [4], fontSize: [5] }}>
          Core team
        </Heading>
        <Box sx={{ fontSize: [3], mb: [3, 2, 2] }}>
          <Text sx={{ letterSpacing: 'wide', display: 'inline-block', mr: [2] }}>
            JEREMY FREEMAN
          </Text>
          <Text sx={{ color: 'secondary', display: 'inline-block' }}>
            Founder / Executive Director
          </Text>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3, 2, 2] }}>
          <Text sx={{ letterSpacing: 'wide', display: 'inline-block', mr: [2] }}>
            JOE HAMMAN
          </Text>
          <Text sx={{ color: 'secondary', display: 'inline-block' }}>
            Technology Director
          </Text>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3, 2, 2] }}>
          <Text sx={{ letterSpacing: 'wide', display: 'inline-block', mr: [2] }}>
            DANNY CULLENWARD
          </Text>
          <Text sx={{ color: 'secondary', display: 'inline-block' }}>
            Policy Director
          </Text>
        </Box>
        <Divider sx={{ mt: [5] }}/>
        <Heading sx={{ my: [4], fontSize: [5] }}>
          Board
        </Heading>
        <Box sx={{ fontSize: [3], mb: [3, 2, 2] }}>
          <Text sx={{ letterSpacing: 'wide', display: 'inline-block', mr: [2] }}>
            KELLY GANNON
          </Text>
          <Text sx={{ color: 'secondary', display: 'inline-block' }}>
            Global Fund for Women
          </Text>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3, 2, 2] }}>
          <Text sx={{ letterSpacing: 'wide', display: 'inline-block', mr: [2] }}>
            ZEKE HAUSFATHER
          </Text>
          <Text sx={{ color: 'secondary', display: 'inline-block' }}>
            Breakthrough Institute / Carbon Brief
          </Text>
        </Box>
        <Divider sx={{ mt: [5] }}/>
        <Heading sx={{ my: [4], fontSize: [5] }}>
          Collaborators
        </Heading>
        <Text sx={{ mb: [4], fontSize: [3], maxWidth: '700px' }}>
          We collaborate closely with a community of experts and advisors. We will also
          be expanding our core team in the near future.
          Interested in working together? <br/>Email us{' '}
          <Link href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>
        </Text>
        <Box sx={{ fontSize: [3], mb: [3] }}>
          <Text sx={{ letterSpacing: 'wide' }}>
            <span sx={{ color: 'green' }}>BILL ANDEREGG</span>
            {' '}/{' '} 
            <span sx={{ color: 'green' }}>GRAYSON BADGLEY</span>
          </Text>
          <Text sx={{ color: 'secondary' }}>
            University of Utah
          </Text>
        </Box>
        <Box sx={{ color: 'green', fontSize: [3], mb: [3] }}>
          <Text sx={{ letterSpacing: 'wide' }}>
            ANNA TRUGMAN
          </Text>
          <Text sx={{ color: 'secondary' }}>
            UC Santa Barbara
          </Text>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3] }}>
          <Text sx={{ letterSpacing: 'wide' }}>
            <span sx={{ color: 'purple' }}>JENNIFER WILCOX</span>
            {' '}/{' '} 
            <span sx={{ color: 'purple' }}>NOAH MCQUEEN</span>
            {' '}/{' '} 
            <span sx={{ color: 'purple' }}>CALEB WOODALL</span>
            {' '}/{' '} 
            <span sx={{ color: 'purple' }}>HELENE PILGORE</span>
            {' '}/{' '} 
            <span sx={{ color: 'purple' }}>BEN KOLOSZ</span>
          </Text>
          <Text sx={{ color: 'secondary' }}>
            Worcester Polytechnic Institute
          </Text>
        </Box>
        <Box sx={{ fontSize: [3], mb: [3] }}>
          <Text sx={{ letterSpacing: 'wide' }}>
            <span sx={{ color: 'purple' }}>ANDREW BERGMAN</span>
            {' '}/{' '} 
            <span sx={{ color: 'purple' }}>TOLY RINBERG</span>
          </Text>
          <Text sx={{ color: 'secondary' }}>
            Harvard University
          </Text>
        </Box>
        <Box sx={{ fontSize: [3], mb: [6] }}>
          <Text sx={{ letterSpacing: 'wide' }}>
            <span sx={{ color: 'orange' }}>JANE ZELIKOVA</span>
          </Text>
          <Text sx={{ color: 'secondary' }}>
            Carbon180
          </Text>
        </Box>
      </Box>
    </Layout>
  )
}

export default Resources