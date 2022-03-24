import { Box } from 'theme-ui'
import { Row, Column, Link, Button, formatDate } from '@carbonplan/components'
import { RotatingArrow } from '@carbonplan/icons'

const Highlight = ({ research }) => {
  return (
    <>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
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
              textAlign: ['left'],
            }}
          >
            {formatDate(research.date)}{' '}
          </Box>
        </Column>
        <Column start={[1, 2, 3, 3]} width={[6, 6, 6, 6]}>
          <Button
            href={research.href}
            size='lg'
            suffix={<RotatingArrow sx={{ color: 'primary' }} />}
          >
            {research.title}
          </Button>
        </Column>
      </Row>
      <Row sx={{ mt: [3] }}>
        <Column start={[1, 2, 3, 3]} width={[6, 5, 5, 5]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], lineHeight: '1.25' }}>
            {research.summary}
          </Box>
        </Column>
        <Column start={[1, 7, 9, 9]} width={[6, 2, 2, 2]}>
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
