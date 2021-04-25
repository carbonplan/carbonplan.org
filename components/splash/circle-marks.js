import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animateOpacity = (delay) => {
  const keys = {}
  keys[`${0 + delay}%`] = {
    opacity: 0.4,
  }
  keys[`${0 + delay - 4}%`] = {
    opacity: 0.4,
  }
  keys[`${0 + delay}%`] = {
    opacity: 1,
  }
  keys[`${90 - delay - 4}%`] = {
    opacity: 1,
  }
  keys[`${90 - delay}%`] = {
    opacity: 0.4,
  }
  keys[`${100}%`] = {
    opacity: 0.4,
  }
  return keyframes(keys)
}

const Circle = ({ playState, animate, color, i }) => {
  const animation = animateOpacity((i - 2 + 1) * 10)

  let base = {
    fill: playState ? color : 'secondary',
    transition: 'fill 0.5s ease-out, opacity 0.5s ease-out',
  }
  let sx
  if (animate) {
    sx = {
      animationName: animation.toString(),
      animationDelay: '0ms',
      animationDuration: '2000ms',
      animationIterationCount: 'infinite',
      animationPlayState: playState ? 'running' : 'paused',
      opacity: 0.4,
      ...base,
    }
  } else {
    sx = {
      opacity: 1,
      ...base,
    }
  }

  return <Box as='circle' cx={`${10 + i * 15.5}%`} cy='50%' r='5%' sx={sx} />
}

const CircleMarks = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  const animate = [false, false, true, true, true, true]

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      preserveAspectRatio='none'
      sx={{ height: height }}
    >
      {Array(6)
        .fill(0)
        .map((d, i) => {
          return (
            <Circle
              key={i}
              i={i}
              color={color}
              animate={animate[i]}
              playState={playState}
            />
          )
        })}
    </Box>
  )
}

export default CircleMarks
