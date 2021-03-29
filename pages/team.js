import { Box, Divider, Styled, Text, Heading, Link, Grid } from 'theme-ui'
import { Layout } from '@carbonplan/components'

const data = [
  {
    name: 'Jeremy Freeman',
    role: 'Executive Director',
    bio:
      'Jeremy is a scientist with a passion for open science, open source software, and bringing cross-disciplinary teams together to tackle big problems. He holds a PhD in Neural Science from New York University and a BA in Neuroscience from Swarthmore College.',
  },
  {
    name: 'Joe Hamman',
    role: 'Technology Director',
    bio:
      'Joe is a climate scientist and engineer. He is passionate about open science and his work has long focused on the development of open data and software tools for basic and applied research. He holds a MS and PhD in Civil Engineering from the University of Washington and a PE in Washington State.',
  },
  {
    name: 'Danny Cullenward',
    role: 'Policy Director',
    bio:
      'Danny is an energy economist and lawyer focused on the design and implementation of scientifically grounded climate policy. He holds a JD and PhD from Stanford University, where he teaches classes on energy law and climate policy.',
  },
  {
    name: 'Oriana Chegwidden',
    role: 'Research Scientist',
    bio:
      'Oriana is a climate scientist committed to conducting impactful, equitable science. She is an alum of AmeriCorps, where she worked to support immigrant rights. She holds a PhD in Civil and Environmental Engineering from the University of Washington and a BS in Chemistry from Haverford College.',
  },
  {
    name: 'Cindy Chiao',
    role: 'Data Scientist',
    bio:
      'Cindy is a data and environmental scientist. She is passionate about sustainable development and is excited to contribute via data analysis and machine learning. She holds a MSE in Environmental Engineering and a MS in Sustainable Systems from the University of Michigan.',
  },
  {
    name: 'Freya Chay',
    role: 'Program Analyst',
    bio:
      'Freya has an interdisciplinary background in decarbonization. She’s particularly interested in how climate-forced transformations will impact culture and communities. She holds an MS in Earth Systems and a BS in Computer Science from Stanford University.',
  },
  {
    name: 'Jane Zelikova',
    role: 'Senior Fellow',
    bio:
      'Jane is an ecosystem scientist working at the intersection of climate science and policy. Her work focuses on advancing the science of engineered and natural carbon sequestration. She earned a PhD from the University of Colorado, is a researcher at the University of Wyoming, and is the founder of 500 Women Scientists.',
  },
]

const Team = () => {
  return (
    <Layout links={'homepage'} title={'team / carbonplan'}>
      <Box sx={{ width: '100%' }}>
        <Text as='h1' variant='styles.h1' sx={{ mt: [4, 5, 5] }}>
          Team
        </Text>
        <Styled.h2>Core team</Styled.h2>
        <Box sx={{ fontSize: [3], pt: [2, 0, 0], pb: [1] }}>
          <Text as='p' sx={{ mb: [4, 4, 4], maxWidth: '700px' }}>
            Interested in joining our team? Check out our{' '}
            <Link href='https://apply.workable.com/carbonplan/'>
              job openings
            </Link>
            .
          </Text>
          <Grid
            columns={[1, 1, 2]}
            sx={{
              gridColumnGap: ['16px', '16px', '64px'],
              gridRowGap: ['16px', '16px', '32px'],
            }}
          >
            {data.map((p) => (
              <Person key={p.name} name={p.name} role={p.role} bio={p.bio} />
            ))}
          </Grid>
        </Box>
        <Divider sx={{ mt: [4] }} />
        <Heading as='h2' variant='styles.h2' sx={{ my: [4, 4, 4], pt: [1] }}>
          Board
        </Heading>
        <Box sx={{ fontSize: [3], pb: [1] }}>
          <Person name='Jeremy Freeman' role='CarbonPlan' />
          <Person name='Kelly Gannon' role='Global Fund for Women' />
          <Person
            name='Zeke Hausfather'
            role='Breakthrough Institute / Carbon Brief'
          />
        </Box>
        <Divider sx={{ mt: [4] }} />
        <Text as='h2' variant='styles.h2' sx={{ my: [4, 4, 4], pt: [1] }}>
          Collaborators
        </Text>
        <Box sx={{ fontSize: [3] }}>
          <Text as='p' sx={{ mb: [4], maxWidth: '700px' }}>
            We collaborate closely with a community of experts and advisors.
            Interested in working together? Email us{' '}
            <Link href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>
          </Text>
          <Box sx={{ mb: [3] }}>
            <Span sx={{ color: 'green' }}>BILL ANDEREGG</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              University of Utah
            </Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Span sx={{ color: 'green' }}>GRAYSON BADGLEY</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              Black Rock Forest Consortium / Columbia University
            </Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Span sx={{ color: 'green' }}>ANNA TRUGMAN</Span>
            <Text sx={{ color: 'secondary' }}>UC Santa Barbara</Text>
          </Box>
          <Box sx={{ mb: [3] }}>
            <Span sx={{ color: 'green' }}>BARBARA HAYA</Span>
            <Text sx={{ color: 'secondary' }}>UC Berkeley</Text>
          </Box>
          <Box sx={{ mb: [3], letterSpacing: 'smallcaps', color: 'secondary' }}>
            <Span sx={{ color: 'purple' }}>JENNIFER WILCOX</Span> /{' '}
            <Span sx={{ color: 'purple' }}>NOAH MCQUEEN</Span> /{' '}
            <Span sx={{ color: 'purple' }}>CALEB WOODALL</Span> /{' '}
            <Span sx={{ color: 'purple' }}>HÉLÈNE PILORGÉ</Span> /{' '}
            <Span sx={{ color: 'purple' }}>BEN KOLOSZ</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              University of Pennsylvania
            </Text>
          </Box>
          <Box sx={{ mb: [3], letterSpacing: 'smallcaps', color: 'secondary' }}>
            <Span sx={{ color: 'purple' }}>ANDREW BERGMAN</Span> /{' '}
            <Span sx={{ color: 'purple' }}>TOLY RINBERG</Span>
            <Text as='p' sx={{ color: 'secondary' }}>
              Harvard University
            </Text>
          </Box>
          <Box sx={{ mb: [3], letterSpacing: 'smallcaps', color: 'secondary' }}>
            <Span sx={{ color: 'orange' }}>JENNIFER PETT-RIDGE</Span> /{' '}
            <Span sx={{ color: 'orange' }}>ERIC SLESSAREV</Span>
            <Text as='p'>Lawrence Livermore National Laboratory</Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

function Span({ sx, children }) {
  return (
    <Text
      as='span'
      sx={{
        display: 'inline-block',
        letterSpacing: 'smallcaps',
        fontFamily: 'heading',
        ...sx,
      }}
    >
      {children}
    </Text>
  )
}

function Bio({ text }) {
  return (
    <Box>
      <Divider sx={{ my: [3] }}></Divider>
      <Text
        sx={{
          fontSize: [2],
          mt: [3],
        }}
      >
        {text}
      </Text>
    </Box>
  )
}

function Person({ name, role, bio }) {
  return (
    <Box sx={{ mb: [3, 2, 2] }}>
      <Text
        as='span'
        sx={{
          fontFamily: 'heading',
          textTransform: 'uppercase',
          letterSpacing: 'smallcaps',
          display: 'inline-block',
          mr: [2],
        }}
      >
        {name}
      </Text>
      <Text
        as='span'
        sx={{
          color: 'secondary',
          display: ['block', 'inline-block', 'inline-block'],
        }}
      >
        {role}
      </Text>
      {bio && <Bio text={bio} />}
    </Box>
  )
}

export default Team
