import Monogram from './monogram'
import { Box, Text, Grid, Link } from 'theme-ui'
import { useThemeUI } from 'theme-ui'

const Footer = () => {
  return <Box sx={{
      mt: [4],
      pt: [4],
      mb: [5, 0, 0]
    }}>
    <Grid columns={[1, 1, 3]} sx={{ mb: [3] }}>
      <Box sx={{ fontFamily: 'heading' }}>
        <Text sx={{ letterSpacing: 'wide', mb: [2] }}>EMAIL</Text>
        <Link href='mailto:hello@carbonplan.org'>hello@carbonplan.org</Link>
      </Box>
      <Box sx={{ fontFamily: 'heading' }}>
        <Text sx={{ letterSpacing: 'wide', mb: [2] }}>MAIL</Text>
        <Text>2443 Fillmore St #380-6048</Text>
        <Text>San Francisco, CA 94115</Text>
      </Box>
      <Box sx={{ fontFamily: 'body' }}>
        <Text sx={{ color: 'secondary' }}>
        CarbonPlan is a registered non-profit public benefit corporation in California
        with 501(3)(c) status pending.
        </Text>
      </Box>
    </Grid>
    <Grid columns={[1, 1, 3]}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ 
          fontFamily: 'monospace', 
          position: 'absolute', 
          bottom: '0px',
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderTopWidth: '1px',
          color: 'secondary',
          fontSize: [1],
          pt: [2],
          display: ['none', 'none', 'inherit']
        }}>
          <Text>(c) 2020 CARBONPLAN, SAN FRANCISCO, CA</Text>
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        {/*
        <Box sx={{ 
          fontFamily: 'monospace', 
          position: 'absolute', 
          bottom: '0px',
          borderStyle: 'solid',
          borderColor: 'muted',
          borderWidth: '0px',
          borderTopWidth: '1px',
          color: 'secondary',
          fontSize: [1],
          pt: [2],
          display: ['none', 'none', 'inherit']
        }}>
          <Text>INSERT METADATA HERE</Text>
        </Box>
        */}
      </Box>
      <Box>
        <Monogram/>
      </Box>
    </Grid>
  </Box>
}

export default Footer