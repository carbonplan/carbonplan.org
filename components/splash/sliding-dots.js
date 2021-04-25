import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animatePosition = (start, end, delay) => {
  const keys = {}
  keys[`${20 + delay}%`] = {
    cx: start + '%',
  }
  keys[`${45 + delay}%`] = {
    cx: end + '%',
  }
  keys[`${55 + delay}%`] = {
    cx: end + '%',
  }
  keys[`${80 + delay}`] = {
    cx: start + '%',
  }
  return keyframes(keys)
}

const CircleLine = ({ start, end, delay, color, i, playState }) => {
  const animation = animatePosition(start, end, delay)

  return (
    <g id='group'>
      <Box
        as='circle'
        cx={start + '%'}
        cy={`${10 + (80 / 3) * i}%`}
        r='7'
        sx={{
          animationName: animation.toString(),
          animationDelay: '0ms',
          animationDuration: '2000ms',
          animationIterationCount: 'infinite',
          opacity: 1,
          transition: 'fill 0.5s ease-out',
          animationPlayState: playState ? 'running' : 'paused',
          fill: playState ? color : 'secondary',
        }}
      />
      <Box
        as='line'
        x1='0%'
        x2='100%'
        y1={`${10 + (80 / 3) * i}%`}
        y2={`${10 + (80 / 3) * i}%`}
        sx={{
          transition: 'stroke 0.5s ease-out',
          opacity: 0.5,
          strokeWidth: '1px',
          vectorEffect: 'non-scaling-stroke',
          stroke: playState ? color : 'secondary',
          strokeLinecap: 'round',
        }}
      />
    </g>
  )
}

const SlidingDots = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      sx={{ height: height }}
    >
      <CircleLine
        start={20}
        end={50}
        delay={0}
        i={0}
        color={color}
        playState={playState}
      />
      <CircleLine
        start={5}
        end={25}
        delay={5}
        i={1}
        color={color}
        playState={playState}
      />
      <CircleLine
        start={40}
        end={5}
        delay={10}
        i={2}
        color={color}
        playState={playState}
      />
      <CircleLine
        start={90}
        end={50}
        delay={15}
        i={3}
        color={color}
        playState={playState}
      />
    </Box>
  )
}

export default SlidingDots
