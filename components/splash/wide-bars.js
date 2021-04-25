import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animateHeight = (start, end, delay) => {
  const keys = {}
  keys[`${15 + delay}%`] = {
    height: start + '%',
    y: 100 - start + '%',
  }
  keys[`${50 + delay}%`] = {
    height: end + '%',
    y: 100 - end + '%',
  }
  keys[`${85 + delay}`] = {
    height: start + '%',
    y: 100 - start + '%',
  }
  return keyframes(keys)
}

const Bar = ({ start, end, delay, opacity, color, i, playState }) => {
  const animationHeight = animateHeight(start, end, delay)

  return (
    <Box
      as='rect'
      x={i * (17 + 3.75) + '%'}
      y={100 - start + '%'}
      width='17%'
      height={start + '%'}
      sx={{
        animationName: animationHeight.toString(),
        animationDelay: '0ms',
        animationDuration: '2000ms',
        animationIterationCount: 'infinite',
        fill: playState ? color : 'secondary',
        opacity: opacity || 1,
        transition: 'fill 0.5s ease-out',
        animationPlayState: playState ? 'running' : 'paused',
      }}
    />
  )
}

const WideBars = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      sx={{ height: height }}
    >
      <Bar
        start={50}
        end={10}
        delay={0}
        i={0}
        color={color}
        playState={playState}
      />
      <Bar
        start={100}
        end={10}
        delay={5}
        i={1}
        opacity={0.5}
        color={color}
        playState={playState}
      />
      <Bar
        start={10}
        end={40}
        delay={10}
        i={2}
        color={color}
        playState={playState}
      />
      <Bar
        start={30}
        end={60}
        delay={15}
        i={3}
        opacity={0.5}
        color={color}
        playState={playState}
      />
      <Bar
        start={50}
        end={20}
        delay={20}
        i={4}
        color={color}
        playState={playState}
      />
    </Box>
  )
}

export default WideBars
