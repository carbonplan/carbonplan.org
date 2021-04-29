import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animateOpacity = (start, end, enter, exit) => {
  const keys = {}
  keys[`${0}%`] = {
    opacity: start,
  }
  keys[`${enter - 4}%`] = {
    opacity: start,
  }
  keys[`${enter}%`] = {
    opacity: end,
  }
  keys[`${exit - 4}%`] = {
    opacity: end,
  }
  keys[`${exit}%`] = {
    opacity: start,
  }
  keys[`${100}%`] = {
    opacity: start,
  }
  return keyframes(keys)
}

const Check = ({ playState, start, end, height, enter, exit, color, i }) => {
  const animation = animateOpacity(start, end, enter, exit)

  const sx = {
    animationName: animation.toString(),
    animationDelay: '0ms',
    animationDuration: '2000ms',
    animationIterationCount: 'infinite',
    animationPlayState: playState ? 'running' : 'paused',
    opacity: start,
    vectorEffect: 'non-scaling-stroke',
    strokeWidth: '1.2px',
    stroke: playState ? color : 'secondary',
    fill: playState ? color : 'secondary',
    transition:
      'stroke 0.5s ease-out, fill 0.5s ease-out, opacity 0.5s ease-out',
  }

  return (
    <Box as='svg' width='20%' viewBox={`0 0 63 75`} sx={{ height: height }}>
      <g transform='translate(-7 -1) scale(0.98 1.02)'>
        <Box
          as='polygon'
          points='31.41,47.16 21.29,37.04 19.8,38.53 31.41,50.14 55.2,26.35 53.71,24.86'
          sx={sx}
        />
      </g>
    </Box>
  )
}

const CheckMarks = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  const start = [1, 1, 1, 0.4, 0.4]
  const end = [0.4, 0.4, 0.4, 1, 1]
  const enter = [70, 60, 50, 10, 20]
  const exit = [80, 90, 100, 40, 30]

  return (
    <Box
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      sx={{ height: height }}
    >
      {Array(5)
        .fill(0)
        .map((d, i) => {
          return (
            <Check
              key={i}
              i={i}
              start={start[i]}
              end={end[i]}
              enter={enter[i]}
              exit={exit[i]}
              height={height}
              color={color}
              playState={playState}
            />
          )
        })}
    </Box>
  )
}

export default CheckMarks
