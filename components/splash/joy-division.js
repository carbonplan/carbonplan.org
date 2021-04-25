import { useEffect, useRef } from 'react'
import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import useAnimation from './use-animation'

const Path = ({ start, end, times, color, i, playState }) => {
  return (
    <Box
      className='line'
      as='path'
      d={start}
      strokeLinecap='round'
      sx={{
        pointerEvents: 'none',
        transition: 'stroke 0.5s ease-out',
        strokeWidth: '3px',
        vectorEffect: 'non-scaling-stroke',
        fill: 'none',
        stroke: playState ? color : 'secondary',
      }}
    >
      <animate
        attributeName='d'
        keyTimes={times}
        values={[start, start, end, end, start, start].join(';')}
        dur='2000ms'
        repeatCount='indefinite'
        calcMode='spline'
        keySplines='0 0 0.5 1 ; 0 0 0.5 1 ; 0 0 0.5 1 ; 0 0 0.5 1 ; 0 0 0.5 1'
      />
    </Box>
  )
}

const JoyDivision = ({ height, color, delay = 0 }) => {
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
          'M0.5,21.87c4.25,0,15.96,0,15.96,0c19.49,0,18.99-7.86,38.83-7.86c9.12,0,18.55,4.12,29.91,4.12 c36.66,0,42.75-14.16,60.88-14.16c9.12,0,17.5,13.95,32.58,13.95c12.84,0,22.14-14.75,32.77-14.75c14.22,0,16.55,18.69,37.67,18.69 c19.45,0,33.32,0,33.32,0'
        }
        end={
          'M0.5,21.87c4.25,0,15.96,0,15.96,0c19.49,0,18.99,0,38.83,0c9.12,0,18.55,0,29.91,0c36.66,0,42.75,0,60.88,0 c9.12,0,17.5,0,32.58,0c12.84,0,22.14,0,32.77,0c14.22,0,16.55,0,37.67,0c19.45,0,33.32,0,33.32,0'
        }
        times={[0, 0, 0.15, 0.8, 0.95, 1].join(';')}
        i={0}
        color={color}
        playState={playState}
      />
      <Path
        start={
          'M0.5,47.46c3.99,0,5.45,0,12.96,0c14.11,0,19.27-13.34,30.29-13.34c8.85,0,13.5,11.39,25.6,11.39 s29.45-12.02,39.86-12.02c10.37,0,15.18,10.3,24.17,10.3s8.39-1.06,16.02-1.06c9.12,0,12.8,4.74,37.76,4.74 c12.84,0,19.77-16.13,29.01-16.13s11.81,16.13,32.94,16.13c19.45,0,33.32,0,33.32,0'
        }
        end={
          'M0.5,47.46c3.99,0,5.45,0,12.96,0c14.11,0,19.27,0,30.29,0c8.85,0,13.5,0,25.6,0s29.45,0,39.86,0 c10.37,0,15.18,0,24.17,0s8.39,0,16.02,0c9.12,0,12.8,0,37.76,0c12.84,0,19.77,0,29.01,0s11.81,0,32.94,0c19.45,0,33.32,0,33.32,0'
        }
        times={[0, 0.15, 0.3, 0.65, 0.8, 1].join(';')}
        i={0}
        color={color}
        playState={playState}
      />
      <Path
        start={
          'M0.5,72c3.99,0,5.45,0,12.96,0c14.11,0,56.25,0,71.56,0s22.4-12.84,30.03-12.84c9.12,0,14.06,11.73,29.5,11.73 c41.11,0,44.84-6.91,58.14-6.91S227.98,72,249.11,72c19.45,0,33.32,0,33.32,0'
        }
        end={
          'M0.5,72c3.99,0,5.45,0,12.96,0c14.11,0,56.25,0,71.56,0s22.4,0,30.03,0c9.12,0,14.06,0,29.5,0c41.11,0,44.84,0,58.14,0s25.28,0,46.41,0c19.45,0,33.32,0,33.32,0'
        }
        times={[0, 0.3, 0.45, 0.5, 0.65, 1].join(';')}
        i={0}
        color={color}
        playState={playState}
      />
    </Box>
  )
}

export default JoyDivision
