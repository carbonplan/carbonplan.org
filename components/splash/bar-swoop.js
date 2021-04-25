import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const y = (v) => {
  return (v > 0 ? 50 - v : 50) + '%'
}

const h = (v) => {
  return Math.abs(v) + '%'
}

const animateHeight = (start, end, delay) => {
  const keys = {}
  keys[`${10 + delay}%`] = {
    height: h(start),
    y: y(start),
  }
  keys[`${40 + delay}%`] = {
    height: h(end),
    y: y(end),
  }
  keys[`${60 + delay}`] = {
    height: h(start),
    y: y(start),
  }
  return keyframes(keys)
}

const Bar = ({ start, end, delay, opacity, color, i, playState }) => {
  const animationHeight = animateHeight(start, end, delay)

  return (
    <Box
      className='bar'
      as='rect'
      x={i * (10 + 20 / 7) + '%'}
      y={y(start)}
      width='10%'
      height={h(start)}
      sx={{
        animationName: animationHeight.toString(),
        animationDelay: '0ms',
        animationDuration: '2000ms',
        animationIterationCount: 'infinite',
        opacity: opacity || 1,
        transition: 'fill 0.5s ease-out',
        animationPlayState: playState ? 'running' : 'paused',
        fill: playState ? color : 'secondary',
      }}
    />
  )
}

const BarSwoop = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  const start = [-25, -50, -25, -15, 25, 50, 25, 15]
  const end = [0, 0, 0, 0, 0, 0, 0, 0]
  const delays = [0, 5, 10, 15, 20, 25, 30, 25]
  const opacity = [0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1]

  return (
    <Box
      as='svg'
      width='100%'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      sx={{ height: height }}
    >
      {Array(8)
        .fill(0)
        .map((d, i) => {
          return (
            <Bar
              key={i}
              start={start[i]}
              end={end[i]}
              delay={delays[i]}
              i={i}
              opacity={opacity[i]}
              color={color}
              playState={playState}
            />
          )
        })}
      <Box
        as='line'
        x1={'0%'}
        x2={'100%'}
        y1={'50%'}
        y2={'50%'}
        sx={{
          stroke: playState ? color : 'secondary',
          transition: 'stroke 0.5s ease-out',
        }}
      />
    </Box>
  )
}

export default BarSwoop
