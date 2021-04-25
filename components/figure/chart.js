import { useThemeUI, Box } from 'theme-ui'
import { format } from 'd3-format'
import { scaleLinear, scaleLog } from 'd3-scale'
import { mean, max, range } from 'd3-array'
import { line, curveBasis } from 'd3-shape'

const colors = {
  dac: 'purple',
  forests: 'green',
  mineralization: 'grey',
  biomass: 'yellow',
  ocean: 'teal',
  soil: 'orange',
}

const categories = [
  'dac',
  'mineralization',
  'ocean',
  'biomass',
  'soil',
  'forests',
]

const Points = ({ data, color, r, x, y }) => {
  return data.map((d, i) => {
    return <circle key={i} cx={x(d) + '%'} cy={y} r={r} fill={color} />
  })
}

const Chart = ({ data, field, domain, ticks, bandwidth, log = false }) => {
  const { theme } = useThemeUI()
  const margin = 1.65
  const width = 100
  let x, xTicks
  if (log) {
    x = scaleLog()
      .domain(domain)
      .range([margin, width - margin - margin])
      .clamp(true)
    xTicks = scaleLog()
      .domain(domain)
      .range([
        (margin / width) * 100,
        ((width - margin) / width) * 100 - margin,
      ])
      .clamp(true)
  } else {
    x = scaleLinear()
      .domain(domain)
      .range([margin, width - margin - 1])
      .clamp(true)
    xTicks = scaleLinear()
      .domain(domain)
      .range([
        (margin / width) * 100,
        ((width - margin) / width) * 100 - margin,
      ])
      .clamp(true)
  }

  const thresholds = range(
    Math.log10(domain[0]),
    Math.log10(domain[1]) + 0.1,
    0.1
  )

  const height = 244
  const spacing = 40
  const offset = 12

  return (
    <Box
      sx={{
        width: '104.9%',
        height: '100%',
        display: 'block',
        ml: ['-1.6%'],
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'block',
          width: '100%',
          height: height,
        }}
      >
        <Box
          as='svg'
          sx={{ position: 'absolute', top: '0px' }}
          width='100%'
          height={height}
          viewBox={`0 0 100 ${height}`}
          preserveAspectRatio='none'
        >
          {categories.map((c, i) => {
            const subset = data
              .filter((d) => d.tags[0] == c)
              .map((d) => Math.min(Math.max(d[field], domain[0]), domain[1]))

            let density = kde(
              epanechnikov(bandwidth),
              thresholds,
              subset.map((d) => Math.log10(d))
            ).map((d) => [Math.pow(10, d[0]), d[1]])

            const mx = max(density, (d) => d[1])
            density = density.map((d) => [d[0], d[1] / mx])

            const generator = line()
              .curve(curveBasis)
              .x((d) => x(d[0]))
              .y((d) => y(d[1]))

            const y = scaleLinear()
              .domain([0, 0.7])
              .range([
                height - offset - i * spacing,
                height - offset - i * spacing - 20,
              ])

            return (
              <g key={'points' + '-' + field + '-' + i}>
                <path
                  d={generator(density)}
                  stroke={theme.colors[colors[c]]}
                  strokeWidth={2.75}
                  fill={'none'}
                  vectorEffect='non-scaling-stroke'
                />
              </g>
            )
          })}
        </Box>
        <Box
          as='svg'
          sx={{ position: 'absolute', top: 0 }}
          width='100%'
          height={height}
          preserveAspectRatio='none'
        >
          {categories.map((c, i) => {
            const subset = data
              .filter((d) => d.tags[0] == c)
              .map((d) => Math.min(Math.max(d[field], domain[0]), domain[1]))

            return (
              <g key={'points' + '-' + field + '-' + i}>
                <Points
                  x={x}
                  y={height - offset - i * spacing}
                  r={5.5}
                  color={theme.colors[colors[c]]}
                  data={subset}
                />
              </g>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

function kde(kernel, thresholds, data) {
  return thresholds.map((t) => [t, mean(data, (d) => kernel(t - d))])
}

function epanechnikov(bandwidth) {
  return (x) =>
    Math.abs((x /= bandwidth)) <= 1 ? (0.75 * (1 - x * x)) / bandwidth : 0
}

export default Chart
