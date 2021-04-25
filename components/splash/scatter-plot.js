import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const animatePosition = (start, end, delay) => {
  const keys = {}
  keys[`${10 + delay}%`] = {
    cy: start + '%',
  }
  keys[`${40 + delay}%`] = {
    cy: end + '%',
  }
  keys[`${60 + delay}%`] = {
    cy: start + '%',
  }
  return keyframes(keys)
}

const Circle = ({ start, end, cx, color, delay, playState, i }) => {
  const animation = animatePosition(start, end, delay)

  return (
    <Box
      as='circle'
      cx={cx + '%'}
      cy={start + '%'}
      r='2%'
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
  )
}

const start = [20, 90, 70, 40, 30, 60, 20, 30]
const end = [50, 20, 30, 80, 70, 95, 40, 50]
const cx = [5, 20, 25, 50, 60, 75, 80, 90]
const delays = [0, 5, 10, 15, 20, 25, 30, 35]

const ScatterPlot = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  return (
    <Box
      as='svg'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      width='100%'
      sx={{ height: height, border: 'solid 0px red' }}
    >
      {Array(8)
        .fill(0)
        .map((d, i) => {
          return (
            <Circle
              key={i}
              start={100 - start[i]}
              end={100 - end[i]}
              cx={cx[i]}
              delay={delays[i]}
              i={i}
              playState={playState}
              color={color}
            />
          )
        })}
      <Box
        as='line'
        x1='0.5%'
        x2='0.5%'
        y1='0%'
        y2='99%'
        sx={{
          transition: 'stroke 0.5s ease-out',
          strokeWidth: '1px',
          stroke: playState ? color : 'secondary',
          strokeLinecap: 'round',
        }}
      />
      <Box
        as='line'
        x1='0.5%'
        x2='99%'
        y1='99%'
        y2='99%'
        sx={{
          transition: 'stroke 0.5s ease-out',
          strokeWidth: '1px',
          stroke: playState ? color : 'secondary',
          strokeLinecap: 'round',
        }}
      />
    </Box>
  )
}

export default ScatterPlot
