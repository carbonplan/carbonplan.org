import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animateWidth = () => {
  const keys = {}
  keys[`${20}%`] = {
    width: '70%',
  }
  keys[`${40}%`] = {
    width: '10%',
  }
  keys[`${60}%`] = {
    width: '40%',
  }
  keys[`${80}`] = {
    width: '70%',
  }
  return keyframes(keys)
}

const AnimatedBar = ({ playState, color }) => {
  const animation = animateWidth()

  return (
    <Box
      as='rect'
      x={'10%'}
      y={'38%'}
      width='70%'
      height={'24%'}
      sx={{
        animationName: animation.toString(),
        animationDelay: '0ms',
        animationDuration: '2000ms',
        animationIterationCount: 'infinite',
        animationPlayState: playState ? 'running' : 'paused',
        fill: playState ? color : 'secondary',
        opacity: 1,
        transition: 'fill 0.5s ease-out',
      }}
    />
  )
}

const Bar = ({ start, end, color, playState }) => {
  return (
    <Box
      as='rect'
      x={'10%'}
      y={'38%'}
      width='80%'
      height={'24%'}
      sx={{
        opacity: 0.5,
        fill: playState ? color : 'secondary',
        transition: 'fill 0.5s ease-out',
      }}
    />
  )
}

const SingleBar = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      sx={{ height: height }}
    >
      <Bar color={color} playState={playState} />
      <AnimatedBar color={color} playState={playState} />
    </Box>
  )
}

export default SingleBar
