import { Box, Image, Divider, Link, Grid } from 'theme-ui'
import { Layout, Row, Column } from '@carbonplan/components'
import Heading from '../components/heading'
import AnnotatedTable from '../components/annotated-table'
import { team, board, collaborators } from '../data/team'

const colors = ['red', 'orange', 'yellow', 'pink']

const Team = () => {
  return (
    <Layout links={'homepage'} title={'team / carbonplan'} nav={'team'}>
      <Heading
        sidenote={
          <span>
            Interested in joining our team? Check out our{' '}
            <Link href='https://carbonplan.org/jobs'>job openings</Link>.
          </span>
        }
      >
        Team
      </Heading>
      <Row>
        <Column start={[1, 2]} width={[6, 3]}>
          <Box
            as='h2'
            variant='styles.h2'
            sx={{ mt: [0, 0, 0, 0], mb: [3, 4, 5, 6] }}
          >
            Core team
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [2, 3, 4, 5], mb: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Box sx={{ pt: [2, 0, 0], pb: [1] }}>
            <Grid
              columns={[1, 2, 2, 2]}
              sx={{
                gridColumnGap: [4, 5, 5, 6],
                gridRowGap: [4, 5, 5, 6],
              }}
            >
              {team
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((p, i) => (
                  <Person
                    key={p.name}
                    name={p.name}
                    role={p.role}
                    bio={p.bio}
                    final={i == team.length - 1}
                    penultimate={i == team.length - 2}
                    color={colors[(Math.ceil(i / 2) + i) % 4]}
                  />
                ))}
            </Grid>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ my: [0] }} />
        </Column>
      </Row>
      <Box sx={{ mb: [3, 4, 5, 6] }}>
        <AnnotatedTable heading='Board' data={board} />
      </Box>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ my: [0] }} />
        </Column>
      </Row>
      <AnnotatedTable
        heading='Collaborators'
        data={collaborators}
        sidenote={
          <span>
            Interested in working together?{' '}
            <Link href='mailto:hello@carbonplan.org'>Email us</Link>.
          </span>
        }
      />
    </Layout>
  )
}

function Span({ sx, children }) {
  return (
    <Box
      as='span'
      sx={{
        display: 'inline-block',
        letterSpacing: 'smallcaps',
        fontFamily: 'heading',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

function Bio({ text }) {
  return (
    <Box sx={{ mb: [2] }}>
      <Box
        sx={{
          fontSize: [2, 2, 2, 3],
          mt: [3],
        }}
      >
        {text}
      </Box>
    </Box>
  )
}

function Person({ name, role, bio, penultimate, final, color }) {
  return (
    <Row columns={[6, 4, 5, 5]}>
      <Column start={[1]} width={[2, 1, 1, 1]}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '160px',
            height: 'auto',
            borderRadius: '50%',
            position: 'relative',
            bg: color,
            left: 'max(calc((100% - 160px)/2), 0px)',
          }}
        >
          <Image
            src={`https://images.carbonplan.org/team/${name
              .toLowerCase()
              .replace(' ', '-')}.png`}
            sx={{
              opacity: 0.25,
              filter: 'contrast(200%) brightness(100%)',
              width: '100%',
              borderRadius: '50%',
              display: 'block',
            }}
          ></Image>
        </Box>
      </Column>
      <Column
        start={[3, 2, 2, 2]}
        width={[4, 3, 4, 4]}
        sx={{
          borderStyle: 'solid',
          borderWidth: '0px',
          borderBottomWidth: [
            final ? '0px' : '1px',
            final || penultimate ? '0px' : '1px',
            final || penultimate ? '0px' : '1px',
            final || penultimate ? '0px' : '1px',
          ],
          pb: [
            final ? 2 : 4,
            final || penultimate ? 2 : 4,
            final || penultimate ? 2 : 4,
            final || penultimate ? 2 : 4,
          ],
          borderColor: 'muted',
        }}
      >
        <Box sx={{ mb: [3, 2, 2] }}>
          <Box
            sx={{
              fontSize: [2, 2, 2, 3],
              fontFamily: 'heading',
              textTransform: 'uppercase',
              letterSpacing: 'smallcaps',
              mr: [2],
              mb: [1],
            }}
          >
            {name}
          </Box>
          <Box
            sx={{
              fontSize: [2, 2, 2, 3],
              fontFamily: 'faux',
              letterSpacing: 'faux',
            }}
          >
            {role}
          </Box>
          {bio && <Bio text={bio} />}
        </Box>
      </Column>
    </Row>
  )
}

export default Team
