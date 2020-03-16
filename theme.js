export default {
  colors: {
    background: 'rgb(234, 234, 234)',
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(26, 24, 24)',
    modes: {
      dark: {
        text: '#fff',
        background: '#222',
        primary: '#0cf',
        secondary: '#90c',
      },
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'LeagueMonoRegular',
    heading: 'LeagueSpartan',
    monospace: 'LeagueMonoRegular',
    monospaceBold: 'LeagueMonoBold'
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: 2
    }
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
      border: 'solid 1px',
      borderColor: 'secondary',
      opacity: 1,
      borderRadius: 5,
      fontFamily: 'monospace',
      fontSize: 1,
      color: 'secondary',
      cursor: 'pointer',
      paddingTop: 1,
      margin: 1,
      marginTop: 2,
      '&:hover': {
        backgroundColor: 'secondary',
        color: 'primary'
      },
      '&:focus': {
        outline: 'none'
      }
    },
    disabled: {
      backgroundColor: 'rgb(255,255,255)',
      border: 'solid 1px',
      borderColor: 'rgb(170,170,170)',
      opacity: 1,
      borderRadius: 0,
      fontFamily: 'monospace',
      fontSize: 1,
      color: 'rgb(170,170,170)',
      cursor: 'pointer',
      paddingTop: 1,
      margin: 1,
      marginTop: 2,
      '&:focus': {
        outline: 'none'
      }
    }
  },
}