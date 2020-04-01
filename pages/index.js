/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled, Box, Card, Grid, Text, Button, Heading, Link } from 'theme-ui'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <Heading as='h1' sx={{ my: [5], fontSize: [7] }}>
        Better carbon removal
      </Heading>
      <Box sx={{ maxWidth: '40em', my: [4] }}>
         <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          CarbonPlan uses science and data to evaluate
          carbon removal opportunities.
        </Heading>
        <Text sx={{ mb: [3] }}>
          Solving the climate crisis now requires both critical reductions in emissions and
          large-scale deployment of carbon removal — natural or technological 
          means to remove carbon dioxide from the atmosphere. Many approaches exist, 
          and effective decision making requires granular, 
          unbiased, and transparent evaluation of the options.
        </Text>
        <Text sx={{ mb: [3] }}>
          We perform scientifically-grounded, technically rigorous analyses of technologies
          and projects, and provide that information to companies, 
          governments, and the public.
        </Text>
      <Heading as='h3' sx={{ fontSize: [4], fontWeight: 'bold', my: [4] }}>
        What we do.
      </Heading>
      </Box>
      <Grid gap={5} columns={[1, 2, 2]} sx={{ my: [4] }}>
        <Box sx={{borderColor: 'secondary', borderWidth: [2], borderStyle: 'solid', borderRadius: [2], p: [3]}}>
          <Heading as='h6' sx={{ fontSize: 2, fontWeight: 'bold', my: 2 }}>Reports</Heading>
          <Text>
            We help companies, non-profits, and governments evaluate and compare
            carbon removal projects and other climate solutions. Our decision tools help guide funding programs, 
            and bring accountability and transparency to the process.
          </Text>
        </Box>
        <Box sx={{borderColor: 'secondary', borderWidth: [2], borderStyle: 'solid', borderRadius: [2], p: [3]}}>
          <Heading as='h6' sx={{ fontSize: 2, fontWeight: 'bold', my: 2 }}>Data and tools</Heading>
          <Text>
            We are building open data products and tools to enable project evaluation
            across a range of technologies. For every scientific domain, 
            we work closely with academic collaborators, and contribute to open data,
            open source software, and open standards.
          </Text>
        </Box>
      </Grid>
      <Heading as='h3' sx={{ fontSize: [4], fontWeight: 'bold', my: [4] }}>
        Follow us <Link href='https://twitter.com/carbonplanorg'>@carbonplanorg</Link>
      </Heading>
      <Heading as='h3' sx={{ fontSize: [4], fontWeight: 'bold', my: [4] }}>
        Find us on <Link href='https://github.com/carbonplan'>Github</Link>
      </Heading>
    </Layout>
  )
}

export default Index