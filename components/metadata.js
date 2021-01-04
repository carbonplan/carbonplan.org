import { Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { useState, useEffect } from 'react'

const Metadata = () => {
  const { theme } = useThemeUI()
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setFromEvent = (e) => setCoords({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', setFromEvent)
    return () => {
      window.removeEventListener('mousemove', setFromEvent)
    }
  }, [])

  const color = theme.colors.secondary

  return (
    <Box
      sx={{
        userSelect: 'none',
        position: 'fixed',
        bottom: 42,
        right: 27,
        transformOrigin: 'right',
        transform: 'rotate(90deg)',
      }}
    >
      <Text
        sx={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
          mr: '-4px',
          fontFamily: 'mono',
          letterSpacing: 'body',
          color: 'secondary',
          fontSize: [1],
          textTransform: 'normal',
        }}
      >
        X,Y: {coords.x.toString().padStart(4, '0')},
        {coords.y.toString().padStart(4, '0')}
      </Text>
      <svg
        fill={color}
        opacity='0.8'
        viewBox='0 0 24 24'
        width='24'
        height='24'
      >
        <circle r={5} cx={19} cy={19} />
      </svg>
      <Text
        sx={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
          ml: [2],
          fontFamily: 'mono',
          letterSpacing: 'body',
          color: 'secondary',
          fontSize: [1],
          textTransform: 'uppercase',
        }}
      >
        {color}
      </Text>
    </Box>
  )
}

export default Metadata
