import { Box } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { default as NextLink } from 'next/link'

const Monogram = () => {
  const context = useThemeUI()
  const theme = context.theme

  return <Box sx={{ width: '80px', mb: ['-12px'], fill: theme.colors.text}}>
  <svg viewBox='0 0 32 32'>
    <path d='M21.9395,14.9395 L17.5005,19.3785 L17.5005,7.0005 L14.5005,7.0005 L14.5005,19.3785 L10.0605,14.9395 L7.9395,17.0605 L14.9395,24.0605 C15.2325,24.3535 15.6165,24.5005 16.0005,24.5005 C16.3835,24.5005 16.7675,24.3535 17.0605,24.0605 L24.0605,17.0605 L21.9395,14.9395 Z'></path>
    <path d='M27.5986,4 L22.8966,4 C26.5556,6.303 28.9996,10.366 28.9996,15 C28.9996,20.4 25.6896,25.039 20.9926,27 L26.5586,27 C29.8886,24.068 31.9996,19.785 31.9996,15 C31.9996,10.734 30.3196,6.868 27.5986,4'></path>
    <path d='M3,15 C3,10.366 5.444,6.303 9.104,4 L4.401,4 C1.68,6.868 0,10.734 0,15 C0,19.785 2.112,24.068 5.441,27 L11.008,27 C6.311,25.039 3,20.4 3,15'></path>
  </svg>
  </Box>
}

export default Monogram