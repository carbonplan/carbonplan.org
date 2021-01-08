/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import { useState, useEffect } from 'react'
import seed from 'math-random-seed'

let index = []
for (let i = 0; i < 14 * 12; i++) {
  index.push(i)
}

const colors = {
  0: 'green',
  1: 'purple',
  2: 'grey',
  3: 'orange',
  4: 'yellow',
  5: 'teal',
}

const values = {
  0: 60000,
  1: 10000,
  2: 20000,
  3: 40000,
  4: 80000,
  5: 10000,
}

var random = seed('1')

let positions = []
let categories = []
let selected = []
for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 14; j++) {
    positions.push([i, j])
    categories.push(Math.floor(random() * 6))
    selected.push(random() > 0.7)
  }
}

const Carbon = () => {
  const [active, setActive] = useState(selected)

  const [total, setTotal] = useState(
    active
      .map((x, i) => (x ? values[categories[i]] : 0))
      .reduce((x, y) => x + y, 0)
  )

  const onClick = (e) => {
    setActive(active.map((x, i) => (i == e.target.id ? true : x)))
  }

  useEffect(() => {
    setTotal(
      active
        .map((x, i) => (x ? values[categories[i]] : 0))
        .reduce((x, y) => x + y, 0)
    )
  }, [active])

  useEffect(() => {
    let frac1, frac2
    setInterval(() => {
      frac1 = 0.5
      setActive(active.map((x, i) => (x ? random() > frac1 : false)))
    }, 3000)
  }, [])

  const format = (x) => {
    if (x >= 1000 && x < 1000000) return (x / 1000).toFixed(0) + 'k'
    if (x >= 1000000 && x < 1000000000) return (x / 1000000).toFixed(2) + 'M'
    else return x
  }

  return (
    <Box sx={{ width: '100%', pt: [2] }}>
      <svg
        style={{ width: '100%', maxWidth: '100%', height: 'auto' }}
        version='1.1'
        viewBox='0 0 32 32'
        preserveAspectRatio='xMinYMin meet'
      >
        {index.map((i) => {
          return (
            <circle
              sx={{
                fill: active[i] ? colors[categories[i]] : 'primary',
                opacity: active[i] ? 1 : 0.2,
                cursor: 'pointer',
                transition: '1s',
                '&:hover': {
                  opacity: 1,
                  fill: colors[categories[i]],
                  transition: '.25s',
                },
              }}
              key={i}
              id={i}
              onClick={onClick}
              cx={positions[i][0] * 2.5 + 1}
              cy={positions[i][1] * 2.5 + 1}
              r='0.9'
            />
          )
        })}
      </svg>
      <Box
        sx={{
          borderStyle: 'solid',
          borderColor: 'primary',
          borderWidth: '0px',
          borderTopWidth: '2px',
          textAlign: 'left',
          fontSize: [6],
          fontFamily: 'mono',
          width: 'fit-content',
          mt: [3],
          pt: [1],
          ml: [2],
        }}
      >
        {format(total)}
        <Text
          sx={{
            display: 'inline-block',
            color: 'secondary',
            fontSize: [4],
            ml: [3],
          }}
        >
          tCO<sub>2</sub> / year
        </Text>
      </Box>
    </Box>
  )
}

export default Carbon
