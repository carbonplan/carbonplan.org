import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animateOpacity = (start, end) => {
  const keys = {}
  keys[`${10}%`] = {
    opacity: start,
  }
  keys[`${50}%`] = {
    opacity: end,
  }
  keys[`${90}%`] = {
    opacity: start,
  }
  return keyframes(keys)
}

const Dot = ({ x, y }) => {
  return (
    <Box
      className='circle'
      as='circle'
      cx={x - 0.5 + '%'}
      cy={y + '%'}
      r='2%'
      sx={{
        transition: 'fill 0.5s ease-out',
      }}
    />
  )
}

const Dots = ({ playState, color }) => {
  const animation1 = animateOpacity(1, 0.2)
  const animation2 = animateOpacity(0.2, 1)

  let seed = 2
  const random = () => {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  const nrows = 6
  const ncols = 20

  const dots1 = []
  const dots2 = []
  let row, col
  for (row = 0; row < nrows; row++) {
    for (col = 0; col < ncols; col++) {
      if (random() > 0.3) {
        dots1.push(
          <Dot key={row + '-' + col} y={row * 21 + 10} x={col * 5.1 + 2} />,
        )
      } else {
        dots2.push(
          <Dot key={row + '-' + col} y={row * 21 + 10} x={col * 5.1 + 2} />,
        )
      }
    }
  }

  return (
    <g id='group'>
      <Box
        as='g'
        sx={{
          animationName: animation1.toString(),
          animationDelay: '0ms',
          animationDuration: '2000ms',
          animationIterationCount: 'infinite',
          opacity: 1,
          transition: 'fill 0.5s ease-out',
          animationPlayState: playState ? 'running' : 'paused',
          fill: playState ? color : 'secondary',
        }}
      >
        {dots1}
      </Box>
      <Box
        as='g'
        sx={{
          animationName: animation2.toString(),
          animationDelay: '0ms',
          animationDuration: '2000ms',
          animationIterationCount: 'infinite',
          opacity: 0.2,
          transition: 'fill 0.5s ease-out',
          animationPlayState: playState ? 'running' : 'paused',
          fill: playState ? color : 'secondary',
        }}
      >
        {dots2}
      </Box>
    </g>
  )
}

const DotGrid = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      sx={{ height: height }}
    >
      <Dots color={color} playState={playState} />
    </Box>
  )
}

export default DotGrid
