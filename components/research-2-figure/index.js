import { Box, Text } from 'theme-ui'
import { scaleLinear } from 'd3-scale'
import { Row, Column } from '@carbonplan/components'
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

const count = projects.length

const x = scaleLinear().domain([0, count]).range([0, 100])
const y = scaleLinear().domain([0, 1]).range([0, 30])

const Figure = () => {
  return (
    <Row as='figure' sx={{ mt: [4, 5, 6, 7], mb: [4, 4, 4, 5] }}>
      <Column start={[1, 1, 2, 2]} width={[6, 8, 10, 10]}>
        <svg
          width='100%'
          height='224'
          viewBox='0 0 100 60'
          preserveAspectRatio='none'
        >
          {projects.map((d, i) => {
            const positive = d > 0
            const fraction = Math.abs(d)
            return (
              <g key={'f-' + i} transform={`translate(${x(i)},0)`}>
                <Box
                  as='rect'
                  width={0.75 * (100 / count)}
                  x='0'
                  height={2 * (y(1) - y(0))}
                  y={y(0)}
                  sx={{
                    fill: positive ? 'green' : 'secondary',
                    pointerEvents: ['none'],
                  }}
                  fillOpacity={'0.2'}
                />
                <Box
                  as='rect'
                  width={0.75 * (100 / count)}
                  x='0'
                  height={y(1) - y(1 - fraction)}
                  y={positive ? y(1 - fraction) : y(1)}
                  sx={{
                    fill: positive ? 'green' : 'secondary',
                    pointerEvents: ['none'],
                  }}
                />
              </g>
            )
          })}
        </svg>
      </Column>
    </Row>
  )
}

export default Figure
