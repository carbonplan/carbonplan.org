import { Box, Styled, Text, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'
import { Layout } from '@carbonplan/components'

const FAQ = () => {
  return (
    <Layout links={'homepage'}>
      <Box sx={{ maxWidth: '700px', mb: [6] }}>
        <Text as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
          FAQ
        </Text>
        <Styled.h2>Are you a nonprofit?</Styled.h2>
        <Styled.p>
          Yes. We are a registered non-profit public benefit corporation in
          California that is recognized by the IRS as a 501(c)(3) tax-exempt
          public charity. Our commitment and responsibility is to the public's
          interest in a safe and stable climate, not to shareholders.
        </Styled.p>
        <Styled.h2>What is carbon removal?</Styled.h2>
        <Styled.p>
          Good question! Carbon removal is removing carbon dioxide from the
          atmosphere and storing it in a durable, ideally permanent, form. It's
          a nascent field, and{' '}
          <NextLink href='/about#technologies' passHref>
            <Link>several methods</Link>
          </NextLink>{' '}
          are being explored and developed, including natural or biological
          solutions (e.g. forests, soil), engineered systems (e.g. direct air
          capture, enhanced mineralization), and more . Note that some
          technologies can play a role in carbon removal but are not, on their
          own, carbon removal systems — you can read more about this distinction
          in an <Link href='/research/carbon-removal-mechanisms'>article</Link>{' '}
          we wrote. In some places carbon removal is referred to as "Carbon
          Dioxide Removal" or CDR. Also note that the phrase "Negative Emissions
          Technologies" or NETs is sometimes used to describe technologies that
          implement carbon removal.
        </Styled.p>
        <Styled.h2>Are you a verifier?</Styled.h2>
        <Styled.p>
          No, we are not a verifier. Several organizations act as third-party
          verifiers in the space of carbon removal and carbon offsets. We play a
          different role. We validate the scientific integrity of projects and
          technologies. Our focus is understanding, quantifying, and clarifying
          the underlying data and science. Using this information, we help guide
          future procurement and deployment decisions.
        </Styled.p>
        <Styled.h2>How are you funded?</Styled.h2>
        <Styled.p>
          We receive a mix of unrestricted funding through donations and grants,
          and project-specific funding through contracts and grants. In both
          cases we list publicly all sources of funding greater than $1000. For
          project-specific funding, we list as soon as the project, or our
          involvement in the project, becomes public. We also include the terms
          and conditions of our engagements. View{' '}
          <NextLink href='/funding' passHref>
            <Link>our list</Link>
          </NextLink>{' '}
          of funding sources.
        </Styled.p>
        <Styled.h2>What are your qualifications?</Styled.h2>
        <Styled.p>
          Our founding team has a deep background in open science, climate
          change science, and climate policy. Executive Director Jeremy Freeman
          completed a PhD in neuroscience, developed open science software
          tools, and helped build a science philanthropy program before starting
          CarbonPlan. Technology Director Joe Hamman completed a PhD in Civil &
          Environmental Engineering, is a project scientist at the National
          Center for Atmospheric Research, and contributes to several climate
          science and software efforts. Policy Director Danny Cullenward
          completed a JD-PhD in energy economics and teaches energy law and
          climate policy at Stanford Law School. As our team grows we will be
          expanding, strengthening, and diversifying our skills, expertise, and
          perspective. We also work closely with an amazing group of{' '}
          <NextLink href='/team#collaborators' passHref>
            <Link>collaborators</Link>
          </NextLink>{' '}
          to develop our methods and ensure our work is grounded in the best
          available science and data.
        </Styled.p>
        <Styled.h2>Who designed this website?</Styled.h2>
        <Styled.p>
          We've been working with{' '}
          <Link href='https://ot.studio/'>Ordinary Things</Link> (formerly known
          as Cast Iron Design). They are incredible. They developed the brand
          and design system and we work collaboratively on site design and
          implementation. Talk to them about your next project. Seriously.
        </Styled.p>
      </Box>
    </Layout>
  )
}

export default FAQ
