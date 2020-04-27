import Layout from '../components/layout'
import Carbon from '../components/carbon'
import { Box, Text, Heading, Link, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'

const link = {
  width: 'fit-content',
  fontSize: [4],
  borderStyle: 'solid',
  borderColor: 'background',
  borderWidth: '0px',
  borderBottomWidth: '1px',
  display: 'block',
  '&:hover': {
    borderColor: 'primary'
  }
}

function Index (props) {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px'}}>
        <Box sx={{ my: [4] }}>
          <Heading sx={{ my: [5], fontSize: [6] }}>
            Research
          </Heading>
          <Heading sx={{ my: [2], fontSize: [5] }}>
              Notes
            </Heading>
          <Box sx={{ my: [3] }}>
            <Text sx={{ my: [1], fontSize: [3] }}>
              Learnings from our first carbon removal project evaluation
            </Text>
            <Text>
              by CARBONPLAN TEAM
            </Text>
          </Box>
        </Box>
        <Box sx={{ my: [4] }}>
          <Heading sx={{ my: [3], fontSize: [5] }}>
            Primers
          </Heading>
          <Box sx={{ my: [3] }}>
            <Text sx={{ my: [1], fontSize: [3] }}>
              Harmonizing project costs with different permanence 
            </Text>
            <Text>
              by CARBONPLAN TEAM
            </Text>
          </Box>
          <Box sx={{ my: [3] }}>
            <Text sx={{ my: [1], fontSize: [3] }}>
              A taxonomy of carbon removal projects
            </Text>
            <Text>
              by CARBONPLAN TEAM
            </Text>
          </Box>
        </Box>
        <Box sx={{ my: [4] }}>
          <Heading sx={{ my: [3], fontSize: [5] }}>
            Models
          </Heading>
          <Box sx={{ my: [3] }}>
            <Text sx={{ my: [1], fontSize: [3] }}>
              Costing and siting for direct air capture
            </Text>
            <Text>
              collaborators NOAH MCQUEEN CALEB WOODHALL JENNIFER WILCOX
            </Text>
            <Text sx={{ fontSize: [1] }}>
              Coming soon...
            </Text>
          </Box>
        </Box>
        <Box sx={{ my: [4] }}>
          <Heading sx={{ my: [3], fontSize: [5] }}>
            Data
          </Heading>
          <Box sx={{ my: [3] }}>
            <Text sx={{ my: [1], fontSize: [3] }}>
              Integrated maps of forest carbon potential and risk
            </Text>
            <Text>
              collaborators BILL ANDEREGG GRAYSON BADGELY ANNA TRUGMAN
            </Text>
            <Text sx={{ fontSize: [1] }}>
              Coming soon...
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Index