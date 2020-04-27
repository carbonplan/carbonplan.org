/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { useState, useEffect } from 'react'

let index = []
for (let i=0; i < 12*14; i++) {
  index.push(i)
}

let positions = []
let categories = []
let selected = []
for (let i=0; i<14; i++) {
  for (let j=0; j<12; j++) {
    positions.push([i, j])
    categories.push(i % 6)
    selected.push((((i % 6) >= 0) && (j > 8)) || (((i % 6) >= 3) && (j > 6)))
  }
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
  1: 50,
  2: 60000,
  3: 400000,
  4: 50000,
  5: 693
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
    setActive(active.map((x, i) => (i == e.target.id) ? !x : x))
  }

  useEffect(() => {
    setTotal(active
      .map((x, i) => x ? values[categories[i]] : 0)
      .reduce((x, y) => x + y, 0)
    )
  }, [active])

  const format = (x) => {
    if ((x >= 1000) && (x < 1000000)) return (x/1000).toFixed(2) + 'k'
    if ((x >= 1000000) && (x < 1000000000)) return (x/1000000).toFixed(2) + 'M'
    else return x
  }

  return <Box sx={{ width: '100%', pt: [2] }}>
    <svg sx={{ width: '100%', maxWidth: '100%', height: 'auto' }}
      version="1.1" viewBox="0 0 32 24" width="1024" height="768" >
      {index.map((i) => {
        return <circle 
          sx={{ 
            fill: active[i] ? theme.tags[tags[categories[i]]] : theme.colors.primary, 
            opacity: active[i] ? 1 : 0.2,
            cursor: 'pointer',
            '&:hover': {
              opacity: 1,
              fill: theme.tags[tags[categories[i]]]
            }
          }} 
          key={i} 
          id={i} 
          onClick={onClick} 
          cx={positions[i][0] * 2 + 1} 
          cy={positions[i][1] * 2 + 1} 
          r='0.75'
        />
      })}
    </svg>
    <Box sx={{ 
      borderStyle: 'solid', 
      borderColor: 'primary', 
      borderWidth: '0px', 
      borderBottomWidth: '2px', 
      textAlign: 'left', 
      fontSize: [6], 
      fontFamily: 'monospace',
      width: 'fit-content',
      mb: [4]
    }}>{ format(total) }
      <Text sx={{ display: 'inline-block', color: 'secondary', fontSize: [4], ml: [3] }}>tCO2 / year</Text>
    </Box>
  </Box>
}

export default Carbon