import { useRef, useEffect } from 'react'
import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const Path = ({ start, step1, step2, step3, opacity, color, i, playState }) => {
  return (
    <Box
      as='polyline'
      points={start}
      strokeLinecap='round'
      sx={{
        pointerEvents: 'none',
        opacity: opacity || 1,
        stroke: playState ? color : 'secondary',
        fill: 'none',
        strokeWidth: '3px',
        vectorEffect: 'non-scaling-stroke',
        transition: 'stroke 0.5s ease-out',
      }}
    >
      <animate
        attributeName='points'
        keyTimes={[0, 0.25, 0.5, 0.75, 1].join(';')}
        values={[start, step1, step2, step1, start].join(';')}
        dur='2000ms'
        repeatCount='indefinite'
        calcMode='spline'
        keySplines='0 0 0.5 1 ; 0 0 0.5 1 ; 0 0 0.5 1 ; 0 0 0.5 1'
      />
    </Box>
  )
}

const Line = ({ height, color, delay = 0 }) => {
  const { mouseEnter, mouseLeave, playState } = useAnimation({ delay: delay })

  const ref = useRef(null)

  useEffect(() => {
    ref.current.pauseAnimations()
  }, [])

  useEffect(() => {
    if (playState) {
      ref.current.unpauseAnimations()
    } else {
      ref.current.pauseAnimations()
    }
  }, [playState])

  return (
    <Box
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      ref={ref}
      as='svg'
      id='line'
      width='100%'
      viewBox='0 0 283 75'
      preserveAspectRatio='none'
      sx={{ height: height }}
    >
      <Path
        start={
          '281.35,2.18 229.33,13.4 208.72,37.74 185.58,37.74 163.88,65.11 134.03,54.31 95.99,61.98 45.21,38.08 1.65,72.82'
        }
        step1={
          '281.35,2.18 229.33,13.4 208.72,37.74 185.58,37.74 163.88,65.11 134.03,54.31 95.99,38.98 45.21,60.08 1.65,72.82'
        }
        step2={
          '281.35,2.18 229.33,49.4 208.72,37.74 185.58,37.74 163.88,38.11 134.03,54.31 95.99,38.98 45.21,60.08 1.65,72.82'
        }
        step3={
          '281.35,2.18 229.33,13.4 208.72,37.74 185.58,37.74 163.88,65.11 134.03,54.31 95.99,38.98 45.21,60.08 1.65,72.82'
        }
        color={color}
        playState={playState}
      />
    </Box>
  )
}

export default Line
