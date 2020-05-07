import { Divider, Grid, Box, Text, Heading, Link, Image } from 'theme-ui'

const prefix = 'https://carbonplan-assets.s3.amazonaws.com/images/'

const Technology = ({ color, name, children }) => {
  return <Grid gap={['16px', '16px', '64px']} columns={[1, 1, '1fr 3fr']} sx={{ mb: [6] }}>
    <Image sx={{
      width: '95%',
      borderRadius: '256px', 
      borderStyle: 'solid',
      borderColor: 'primary',
      borderWidth: '1px'
    }} src={prefix + name + '.png'} />
    <Box>
      <Text sx={{ color: color, textTransform: 'uppercase', fontFamily: 'heading', letterSpacing: '0.07em' }}>
        { name }
      </Text>
       <Text sx={{ fontSize: [3], maxWidth: '500px' }}>
        { children }
      </Text>
    </Box>
  </Grid>
}

export default Technology