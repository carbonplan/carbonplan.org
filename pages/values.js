/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled, Box, Card, Grid, Text, Button, Heading } from 'theme-ui'
import Link from 'next/link'
import Layout from '../components/layout'

const Values = () => {
  return (
    <Layout>
      <Heading as='h1' sx={{ my: [5], fontSize: [7] }}>
        Values
      </Heading>
      <Box sx={{ maxWidth: '40em', my: [5] }}>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Openness
        </Heading>
        <Text sx={{ mb: [3] }}>
          We only work with partners who share a commitment to making data
          and analysis of climate solutions publicly available. 
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Transparency
        </Heading>
        <Text sx={{ mb: [3] }}>
          Accountability requires transparency, and our work products will be radically transparent. 
          Every metric in every analysis will be traceable to public data, 
          open source software, or published literature.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Humility
        </Heading>
        <Text sx={{ mb: [3] }}>
          None of us have all the answers. We work closely with domain experts
          for every technology area we evaluate, and we hope to 
          bring a community of expertise and practice together around this problem.
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Justice
        </Heading>
        <Text sx={{ mb: [3] }}>
          We will push for a collective and participatory process, and incorporate, as much as possible, 
          the perspectives of environmental justice and the needs and experiences 
          of frontline communities in implementing climate solutions
        </Text>
      </Box>
    </Layout>
  )
}

export default Values