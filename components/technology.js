import { Grid, Box, Text, Image } from 'theme-ui'

const prefix = 'https://carbonplan-assets.s3.amazonaws.com/images/'

const Technology = ({ color, name, children }) => {
  return (
    <Grid
      gap={['16px', '16px', '64px']}
      columns={[1, 1, '1fr 3fr']}
      sx={{ mb: [6] }}
    >
      <Image
        sx={{
          userSelect: 'none',
          width: '85%',
          maxWidth: '250px',
          height: 'auto',
          borderRadius: '256px',
          borderStyle: 'solid',
          borderColor: 'primary',
          borderWidth: '1px',
        }}
        alt={name}
        src={prefix + name + '.png'}
      />
      <Box sx={{ maxWidth: '500px' }}>
        <Text
          as='h3'
          sx={{
            color: color,
            textTransform: 'uppercase',
            fontFamily: 'heading',
            letterSpacing: 'smallcaps',
            fontSize: [3],
          }}
        >
          {name}
        </Text>
        <Text as='p'>{children}</Text>
      </Box>
    </Grid>
  )
}

export default Technology
