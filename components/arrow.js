import { Box } from 'theme-ui'

const Arrow = () => {
  return (
    <Box
      sx={{
        stroke: 'primary',
        fill: 'none',
        width: '58px',
      }}
    >
      <svg x='0px' y='0px' viewBox='0 0 51.2 216.4'>
        <line x1='25.7' y1='35.2' x2='25.7' y2='212.4' />
        <circle cx='25.6' cy='23.7' r='11.2' />
        <g transform='translate(0,20)'>
        <line x1='25.8' y1='193' x2='40.7' y2='178.4' />
        <line x1='25.8' y1='193' x2='10.8' y2='178.4' />
        </g>
      </svg>
    </Box>
  )
}

export default Arrow
