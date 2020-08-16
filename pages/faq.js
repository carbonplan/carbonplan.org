import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function FAQ() {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px', mb: [6] }}>
        <Heading sx={{ my: [4, 4, 5], fontSize: [6, 7, 7] }}>FAQ</Heading>
        <Box>
          <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
            Are you a nonprofit?
          </Heading>
          <Text sx={{ fontSize: [3] }}>
            Yes. We are a registered non-profit public benefit corporation in
            California. Our 501(3)(c) status is pending. Our commitment and
            responsibility is to the public's interest in a safe and stable
            climate, not to shareholders.
          </Text>
        </Box>
        <Box>
          <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
            What is carbon removal?
          </Heading>
          <Text sx={{ fontSize: [3] }}>
            Good question! Carbon removal is removing carbon dioxide from the
            atmosphere and storing it in a durable, ideally permanent, form.
            It's a nascent field, and several methods are being explored and
            developed, including natural or biological solutions (e.g. forests,
            soil), engineered systems (e.g. direct air capture, enhanced
            mineralization), and{' '}
            <NextLink href='/about#technologies'>
              <a>
                <Link>more</Link>
              </a>
            </NextLink>
            . Note that some technologies can play a role in carbon removal but
            are not, on their own, carbon removal systems — you can read more
            about this distinction in an <Link href='/research/carbon-removal-mechanisms'>article</Link>{' '}
            we wrote. In some
            places carbon removal is referred to as "Carbon Dioxide Removal" or
            CDR. Also note that the phrase "Negative Emissions Technologies" or
            NETs is sometimes used to describe technologies that implement
            carbon removal.
          </Text>
        </Box>
        <Box>
          <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
            Are you a verifier?
          </Heading>
          <Text sx={{ fontSize: [3] }}>
            No, we are not a verifier. Several organizations act as third-party
            verifiers in the space of carbon removal and carbon offsets. We play
            a different role. We validate the scientific integrity of projects
            and technologies. Our focus is understanding, quantifying, and
            clarifying the underlying data and science. Using this information,
            we help guide future procurement and deployment decisions.
          </Text>
        </Box>
        <Box>
          <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
            How are you funded?
          </Heading>
          <Text sx={{ fontSize: [3] }}>
            We receive a mix of unrestricted funding through donations and
            grants, and project-specific funding through contracts and grants.
            In both cases we list publicly all sources of funding greater than
            $1000. For project-specific funding, we list as soon as the project,
            or our involvement in the project, becomes public. We also include
            the terms and conditions of our engagements. View{' '}
            <NextLink href='/funding'>
              <a>
                <Link>our list</Link>
              </a>
            </NextLink>{' '}
            of funding sources.
          </Text>
        </Box>
        <Box>
          <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
            What are your qualifications?
          </Heading>
          <Text sx={{ fontSize: [3] }}>
            Our team has a deep background in open science, climate change
            science, and climate policy. Executive Director Jeremy Freeman
            completed a PhD in neuroscience, developed open science software
            tools, and helped build a science philanthropy program before
            starting CarbonPlan. Technology Director Joe Hamman completed a PhD
            in Civil & Environmental Engineering, is a project scientist at the
            National Center for Atmospheric Research, and contributes to several
            climate science and software efforts. Policy Director Danny
            Cullenward completed a JD-PhD in energy economics and teaches energy
            law and climate policy at Stanford Law School. We work closely with
            an amazing group of{' '}
            <NextLink href='/team#collaborators'>
              <a>
                <Link>collaborators</Link>
              </a>
            </NextLink>{' '}
            to develop our methods and ensure our work is grounded in the best
            available science and data.
          </Text>
        </Box>
        <Box>
          <Heading sx={{ mt: [5], mb: [4], fontSize: [5] }}>
            Who designed this website?
          </Heading>
          <Text sx={{ fontSize: [3] }}>
            We've been working with{' '}
            <Link href='https://castirondesign.com/'>Cast Iron Design</Link>.
            They are incredible. They developed the brand and design system and
            we've worked collaboratively on the site design and implementation.
            Talk to them about your next project. Seriously.
          </Text>
        </Box>
      </Box>
    </Layout>
  )
}

export default FAQ
