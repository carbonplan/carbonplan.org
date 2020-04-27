/** @jsx jsx */
import { jsx, Box, IconButton, Text } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { useState, useEffect } from 'react'

const Footer = (props) => {

  const [colorMode, setColorMode] = useColorMode()
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const toggle = (e) => {
    if (colorMode == 'light') setColorMode('dark')
    else setColorMode('light')
  }

  useEffect(() => {
    const setFromEvent = e => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const color = '#7eb36a'  // TODO: Get from pointer

  return (
    <Box sx={{ float: 'right', transformOrigin: 'right', transform: 'rotate(90deg)' }}>
      <Text variant='metric.units' sx={{ whiteSpace: 'nowrap', display: 'inline-block', leftMargin: '15px' }}>
        {coords.x.toString().padStart(4, '0')},{coords.y.toString().padStart(4, '0')} X,Y 
      </Text>
      <IconButton aria-label='Current Color' sx={{ fill: 'secondary' }} >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          >
          <circle
            r={5}
            cx={19}
            cy={19}
          />
        </svg>
      </IconButton>
      <Text variant='metric.units' sx={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
        { color }
      </Text>
      <IconButton aria-label='Toggle dark mode' onClick={() => toggle()} 
        sx={{ 
          fill: 'background', 
          stroke: 'secondary', 
          cursor: 'pointer',
          position: 'relative', 
          top: '7px', 
          left: '7px',
          transition: '0.25s all',
          '&:hover': {
            stroke: 'text'
          }
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          strokeWidth='2'
        >
          <circle cx="12.1" cy="12" r="5.2"/>
          <line x1="12.1" y1="0.9" x2="12.1" y2="4.3"/>
          <line x1="12.1" y1="19.8" x2="12.1" y2="23.2"/>
          <line x1="23.2" y1="12" x2="19.8" y2="12"/>
          <line x1="4.3" y1="12" x2="0.9" y2="12"/>
          <line x1="20" y1="19.9" x2="17.5" y2="17.5"/>
          <line x1="6.6" y1="6.6" x2="4.2" y2="4.1"/>
          <line x1="4.2" y1="19.9" x2="6.6" y2="17.5"/>
          <line x1="17.5" y1="6.6" x2="20" y2="4.1"/>
        </svg>
      </IconButton>
    </Box>
  )
}

export default Footer
