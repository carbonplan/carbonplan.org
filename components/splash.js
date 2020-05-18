/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { useState, useEffect } from 'react'
import seed from 'math-random-seed'

let index = []
for (let i=0; i < 14*12; i++) {
  index.push(i)
}

const tags = {
  0: 'forests',
  1: 'dac',
  2: 'mineralization',
  3: 'soil',
  4: 'biomass',
  5: 'ocean'
}

const values = {
  0: 60000,
  1: 10000,
  2: 20000,
  3: 40000,
  4: 80000,
  5: 10000
}

var random = seed('1')

let positions = []
let categories = []
let selected = []
for (let i=0; i<12; i++) {
  for (let j=0; j<14; j++) {
    positions.push([i, j])
    categories.push(Math.floor(random() * 6))
    selected.push(random() > 0.7)
  }
}

const Carbon = () => {

  const context = useThemeUI()
  const theme = context.theme

  const [active, setActive] = useState(selected)

  const [total, setTotal] = useState(active
    .map((x, i) => x ? values[categories[i]] : 0)
    .reduce((x, y) => x + y, 0)
  )

  const onClick = (e) => {
    setActive(active.map((x, i) => (i == e.target.id) ? true : x))
  }

  useEffect(() => {
    setTotal(active
      .map((x, i) => x ? values[categories[i]] : 0)
      .reduce((x, y) => x + y, 0)
    )
  }, [active])

  useEffect(() => {
    let frac1, frac2
    setInterval(() => {
      frac1 = 0.5
      setActive(active.map((x, i) => x ? (random() > frac1) : false))
    }, 5000)
  }, [])

  const format = (x) => {
    if ((x >= 1000) && (x < 1000000)) return (x/1000).toFixed(0) + 'k'
    if ((x >= 1000000) && (x < 1000000000)) return (x/1000000).toFixed(2) + 'M'
    else return x
  }

  return <Box sx={{ width: '100%', pt: [2] }}>
    <svg sx={{ width: '100%', maxWidth: '100%', height: 'auto' }}
      version="1.1" viewBox="0 0 32 32" width="1024" height="1024" >
      {index.map((i) => {
        return <circle 
          sx={{ 
            fill: active[i] ? theme.tags[tags[categories[i]]] : theme.colors.primary, 
            opacity: active[i] ? 1 : 0.2,
            cursor: 'pointer',
            WebkitTransition: '1s',
            '&:hover': {
              opacity: 1,
              fill: theme.tags[tags[categories[i]]],
              WebkitTransition: '.25s',
            }
          }} 
          key={i} 
          id={i} 
          onClick={onClick} 
          cx={positions[i][0] * 2.5 + 1} 
          cy={positions[i][1] * 2.5 + 1} 
          r='0.9'
        />
      })}
    </svg>
    <Box sx={{ 
      borderStyle: 'solid', 
      borderColor: 'primary', 
      borderWidth: '0px', 
      borderTopWidth: '2px', 
      textAlign: 'left', 
      fontSize: [6], 
      fontFamily: 'monospace',
      width: 'fit-content',
      mt: [3],
      pt: [1],
      ml: [2]
    }}>{ format(total) }
      <Text sx={{ display: 'inline-block', color: 'secondary', fontSize: [4], ml: [3] }}>tCO<sub>2</sub> / year</Text>
    </Box>
  </Box>
}

export default Carbon