import { Box, Text } from 'theme-ui'
import { Row, Column } from '@carbonplan/components'
import Chart from './chart'
import { projects } from './data.js'

const sx = {
  label: {
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
  },
  units: {
    display: 'inline-block',
    fontFamily: 'body',
    letterSpacing: 'body',
    color: 'secondary',
    textTransform: 'none',
    ml: [1],
  },
}

const Figure = () => {
  return (
    <Row as='figure' sx={{ mt: [4, 5, 6, 7], mb: [4, 4, 4, 5] }}>
      <Column
        start={[1, 1, 2, 2]}
        width={[6, 4, 5, 5]}
        sx={{ display: ['none', 'initial', 'initial', 'initial'] }}
      >
        <Chart
          data={projects}
          field={'permanence'}
          ticks={[1, 10, 100, 1000]}
          domain={[1, 1000]}
          bandwidth={0.1}
          log={true}
        />
      </Column>
      <Column start={[1, 5, 7, 7]} width={[6, 4, 5, 5]}>
        <Chart
          data={projects}
          field={'volume'}
          ticks={[10, 100, 1000, 10000, 100000, 1000000]}
          domain={[10, 1000000]}
          bandwidth={0.2}
          log={true}
        />
      </Column>
    </Row>
  )
}

export default Figure
