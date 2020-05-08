import { Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Arrow = () => {
  const context = useThemeUI()
  const theme = context.theme

  return <Box sx={{
    stroke: theme.colors.primary,
    fill: 'none',
    width: '58px'
  }}>
    <svg x="0px" y="0px" viewBox="0 0 51.2 231.4">
      <line x1="25.7" y1="35.2" x2="25.7" y2="222.4"/>
      <circle cx="25.6" cy="23.7" r="11.2"/>
      <line x1="25.8" y1="223" x2="40.7" y2="208.4"/>
      <line x1="25.8" y1="223" x2="10.8" y2="208.4"/>
    </svg>
  </Box>
}

export default Arrow