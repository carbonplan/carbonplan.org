import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const radius = 6.5
const perimeter = radius * Math.PI * 2
const offset = 18.5
const spacing = (100 - offset * 2) / 3

const dash = (value) => {
  return perimeter + (perimeter * value) / 100
}

const animateStroke = (start, end, delay) => {
  const keys = {}
  keys[`${10 + delay}%`] = {
    strokeDashoffset: dash(start) + '%',
  }
  keys[`${40 + delay}%`] = {
    strokeDashoffset: dash(end) + '%',
  }
  keys[`${70 + delay}`] = {
    strokeDashoffset: dash(start) + '%',
  }
  return keyframes(keys)
}

const Donut = ({ playState, start, end, color, i }) => {
  const animation = animateStroke(start, end, i * 10)

  return (
    <g>
      <Box
        as='circle'
        cx={`${offset + i * spacing}%`}
        cy='50%'
        r={radius + '%'}
        sx={{
          animationName: animation.toString(),
          animationDelay: '0ms',
          animationDuration: '2000ms',
          animationIterationCount: 'infinite',
          animationPlayState: playState ? 'running' : 'paused',
          fill: 'none',
          strokeDashoffset: dash(start) + '%',
          strokeDasharray: perimeter + '%',
          stroke: playState ? color : 'secondary',
          strokeWidth: '4.4%',
          opacity: 1,
          vectorEffect: 'non-scaling-stroke',
          transition: 'stroke 0.5s ease-out',
          transform: 'rotate(-90deg)',
          transformOrigin: `${offset + i * spacing}% 50%`,
        }}
      />
      <Box
        as='circle'
        cx={`${offset + i * spacing}%`}
        cy='50%'
        r={radius + '%'}
        sx={{
          fill: 'none',
          strokeDashoffset: dash(100) + '%',
          strokeDasharray: perimeter + '%',
          stroke: playState ? color : 'secondary',
          strokeWidth: '4.4%',
          transition: 'stroke 0.5s ease-out',
          opacity: 0.2,
          vectorEffect: 'non-scaling-stroke',
        }}
      />
    </g>
  )
}

const DonutMarks = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  const start = [60, 78, 100, 40]
  const end = [30, 25, 65, 5]

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      preserveAspectRatio='none'
      sx={{ height: height }}
    >
      {Array(4)
        .fill(0)
        .map((d, i) => {
          return (
            <Donut
              key={i}
              i={i}
              start={start[i]}
              end={end[i]}
              color={color}
              playState={playState}
            />
          )
        })}
    </Box>
  )
}

export default DonutMarks
