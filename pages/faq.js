import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function FAQ () {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px', mb: [6] }}>
      <Heading sx={{ my: [4, 4, 5], fontSize: [6, 7, 7] }}>
        FAQ
      </Heading>
      <Box>
        <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
          Are you a nonprofit?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Yes. We are a registered non-profit public benefit corporation in California. Our 501(3)(c) status is pending.
          Our commitment and responsability is to the public's interest in a safe and stable climate, not to shareholders.
        </Text>
      </Box>
      {/*
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          How are you funded?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Our current list of support over $5k includes seed funding from a 
          Carbon180 Entrepreneur in Residence Fellowship, 
          a donation from Hampus Jakobsson, and a donation from a private individual 
          who has a personal connection to our founder and would prefer to remain anonymous 
          but whom is not known publicly and has no business interests in carbon removal or climate policy. 
          We also have support committed from Incite Labs, 
          pending IRS approval of our 501(c)(3) status.
        </Text>
      </Box>
      */}
      <Box>
        <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
          Are you a verifier?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          No, we are not a verifier. Several organizations act as third-party verifiers
          in the space of carbon removal and carbon offsets. We play a different role.
          We validate the scientific integrity of projects and technologies.
          Our focus is understanding, quantifying, and clarifying the underlying data and science. 
          Using this information, we help guide future procurement and deployment decisions.
        </Text>
      </Box>
      <Box>
        <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
          What are your qualifications?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Our team has a deep background in open science, climate change science, 
          and climate policy. Executive Director Jeremy Freeman completed a PhD 
          in neuroscience, developed open science software tools, and helped build a 
          science philanthropy program before starting CarbonPlan. 
          Technology Director Joe Hamman completed a PhD in Civil & Environmental Engineering,
          is a project scientist at the National Center for Atmospheric Research,
          and contributes to several climate science and software efforts. 
          Policy Director Danny Cullenward completed a JD-PhD in energy economics 
          and teaches energy law and climate policy at Stanford Law School. 
          We work closely with an amazing group of {' '}
          <NextLink href='/team'><Link>collaborators</Link></NextLink>{' '}
          to develop our methods and ensure our work is grounded 
          in the best available science and data.
        </Text>
      </Box>
      <Box>
        <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
          Who designed this website?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          We've been working with <Link href='https://castirondesign.com/'>Cast Iron Design</Link>. They are incredible. 
          They developed the brand and design system and we've worked collaboratively 
          on the site design and implementation. Talk to them about your next project. Seriously.
        </Text>
      </Box>
      </Box>
    </Layout>
  )
}

export default FAQ