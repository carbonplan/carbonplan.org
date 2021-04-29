import { Box } from 'theme-ui'
import { Row, Column, Links, Buttons, utils } from '@carbonplan/components'

const { ArrowButton } = Buttons
const { WrappedLink } = Links
const { formatDate } = utils

const Highlight = ({ research }) => {
  return (
    <>
    <Row sx={{mt: [4, 5, 6, 7]}}>
      <Column start={[1]} width={[6]}>
        <Box
          sx={{
            color: 'secondary',
            fontFamily: 'mono',
            letterSpacing: '0.05em',
            fontSize: [1, 1, 1, 2],
            mt: ['2px'],
            mb: [3],
            userSelect: 'none',
            textTransform: 'uppercase',
            display: ['block', 'none', 'none', 'none'],
            textAlign: ['left']
          }}
        >
          {formatDate(research.date)}{' '}
        </Box>
      </Column>
      <Column start={[1, 2, 3, 3]} width={[6, 6, 6, 6]}>
        <WrappedLink
          href={research.href}
          sx={{
            textDecoration: 'none',
            display: 'block',
            width: 'fit-content',
          }}
        >
          <ArrowButton label={research.title} size='lg' fill={research.color} />
        </WrappedLink>
      </Column>
    </Row>
    <Row sx={{ mt: [3] }}>
      <Column start={[1, 2, 3, 3]} width={[6, 5, 5, 5]}>
        <Box sx={{ fontSize: [3, 3, 3, 4], lineHeight: 'h3' }}>
          {research.summary}
        </Box>
      </Column>
      <Column start={[1, 7, 8, 8]} width={[6, 2, 2, 2]}>
        <Box
          sx={{
            color: 'secondary',
            fontFamily: 'mono',
            letterSpacing: '0.05em',
            fontSize: [1, 1, 1, 2],
            mt: ['2px'],
            userSelect: 'none',
            textTransform: 'uppercase',
            display: ['none', 'block', 'block', 'block'],
            textAlign: ['left', 'right', 'right', 'right']
          }}
        >
          {formatDate(research.date)}{' '}
        </Box>
      </Column>
    </Row>
    </>

  )
}

export default Highlight