/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled, Box, Card, Grid, Text, Button, Heading } from 'theme-ui'
import Link from 'next/link'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <Heading as='h1' sx={{ my: [5], fontSize: [7] }}>
        About
      </Heading>
      <Box sx={{ maxWidth: '40em', my: [5] }}>
        <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Heading
        </Heading>
        <Text sx={{ mb: [3] }}>
          Text text text
        </Text>
         <Heading as='h3' sx={{ my: [4], fontSize: [4] }}>
          Heading
        </Heading>
        <Text sx={{ mb: [3] }}>
          Text text text
        </Text>
      </Box>
    </Layout>
  )
}

export default Index