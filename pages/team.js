/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled, Box, Card, Grid, Text, Button, Heading } from 'theme-ui'
import Link from 'next/link'
import Layout from '../components/layout'

const Team = () => {
  return (
    <Layout>
      <Heading as='h1' sx={{ my: [5], fontSize: [7] }}>
        Team
      </Heading>
      <Box sx={{ maxWidth: '40em', my: [5] }}>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Core team
        </Heading>
        <Text sx={{ mb: [3] }}>
          Jeremy Freeman, Danny Cullenward, Joe Hamman
        </Text>
         <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Board
        </Heading>
        <Text sx={{ mb: [3] }}>
          Zeke Hausfather, Kelly Gannon
        </Text>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Collaborators and advisors
        </Heading>
        <Text sx={{ mb: [3] }}>
          Bill Anderegg, Grayson Badgley, Jennifer Wilcox, Jane Zelikova, Helene
          Pilorge, Ben Kolosz, Grace Wu, Jennifer Pett-Ridge, Andrew Bergman, Toly
          Rinberg, Eugene Wan 
        </Text>
      </Box>
    </Layout>
  )
}

export default Team