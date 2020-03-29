/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled, Box, Card, Grid, Text, Button, Heading } from 'theme-ui'
import Link from 'next/link'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <Heading as='h1' sx={{ my: [5], fontSize: [7] }}>
        Optimizing carbon removal
      </Heading>
      <Box sx={{ maxWidth: '40em', my: [4] }}>
         <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          CarbonPlan analyzes carbon removal oppurtunities and 
          helps deploy funding to the best projects.
        </Heading>
        <Text sx={{ mb: [3] }}>
          Solving the climate crisis now requires both critical reductions in emissions and
          large-scale deployment of carbon removal — natural or technological 
          means to remove carbon dioxide from the atmosphere. Many approaches exist, 
          and effective decision making will require granular, 
          unbiased evaluation of the options.
        </Text>
      </Box>
      <Box>
        <Heading as='h3' sx={{ fontSize: [4], fontWeight: 'bold', my: [4] }}>
          What we do.
        </Heading>
      </Box>
      <Grid gap={5} columns={[1, 2, 2]} sx={{ my: [3] }}>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 'bold', my: 2 }}>Reports</Text>
          <Text>
            We help companies, non-profits, and governments evaluate and compare
            carbon removal projects. Our reports help guide funding programs, 
            and bring accountability and transparency to the process.
          </Text>
        </Box>
        <Box>
          <Text sx={{ fontSize: 2, fontWeight: 'bold', my: 2 }}>Data and tools</Text>
          <Text>
            We are building open source data products and tools to enable project evaluation
            across a range of technologies. For every scientific domain, 
            we work closely with academic collaborators.
          </Text>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Index