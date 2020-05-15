export default {
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],
  fonts: {
    body: 'relative-book-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    faux: 'relative-faux-book-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    heading: 'relative-medium-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    monospace: 'relative-mono-11-pitch-pro, Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 24, 34, 48, 64, 96],
  letterSpacings: {
    body: '0.01em',
    mono: '0.02em',
    faux: '0.05em',
    heading: '-0.015em',
    wide: '0.07em',
    extra: '0.13em'
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 400,
  },
  lineHeights: {
    body: 1.35,
    small: 1.3,
    heading: 1.05,
  },
  colors: {
    text: '#ebebec',
    background: '#1b1e23',
    primary: '#e4e4e4',
    secondary: '#808080',
    muted: '#363a3e',
    red: '#f07071',
    orange: '#ea9755',
    yellow: '#d4c05e',
    green: '#7eb36a',
    teal: '#64b9c4',
    blue: '#85a2f7',
    purple: '#bc85d9',
    pink: '#e587b6',
    grey: '#a9b4c4',
    modes: {
      light: {
        text: '#333333',
        background: '#ebebec',
        primary: '#484848',
        secondary: '#b0b0b0',
        muted: 'rgb(200,200,200)',
        red: '#f07071',
        orange: '#ea9755',
        yellow: '#d4c05e',
        green: '#7eb36a',
        teal: '#64b9c4',
        blue: '#85a2f7',
        purple: '#bc85d9',
        pink: '#e587b6',
        grey: '#a9b4c4'
      }
    }
  },
  text: {
    default: {
      color: 'text',
      fontFamily: 'body',
      letterSpacing: 'body'
    },
    link: {
      color: 'text',
      '&:active': {
        color: 'text',
      },
      '&:hover': {
        color: 'secondary',
      },
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    description: {
      fontSize: [2],
      marginBlockStart: '0.3em',
      mb: [1]
    },
    metric: {
      value: {
        fontFamily: 'monospace',
        fontSize: [2, 2, 3],
        textAlign: 'right',
        mt: ['6px', '6px', '2px'],
      },
      label: {
        fontFamily: 'monospace',
        fontSize: [2, 2, 2],
        mt: ['6px'],
        textTransform: 'capitalize',
      },
      comment: {
        fontFamily: 'body',
        fontSize: [1],
        color: 'secondary',
        letterSpacing: 'body',
        lineHeight: 'small',
        mt: [0],
        mb: [2]
      },
      units: {
        fontFamily: 'monospace',
        color: 'secondary',
        fontSize: [1],
        ml: [2],
        textTransform: 'normal'
      },
      rating: {
        display: 'inline-block',
        ml: [3],
        fontSize: ['18px']
      }
    },
    arrow: {
      ml: [2], 
      color: 'text',
      fontSize: [4], 
      position: 'relative', 
      top: '4px', 
      display: 'inline-block',
      textDecoration: 'none',
      lineHeight: 0,
      '&:active': {
        color: 'text',
      },
      '&:hover': {
        color: 'secondary',
        borderColor: 'secondary'
      }
    }
  },
  forms: {
    input: {
      fontSize: [2],
      pt: ['4px'],
      pb: ['6px'],
      pl: [0],
      pr: [0],
      fontFamily: 'monospace',
      borderRadius: '0px',
      borderStyle: 'solid',
      borderColor: 'muted',
      borderWidth: '0px',
      borderBottomWidth: '0px',
      textAlign: 'right'
    },
    select: {
      cursor: 'pointer',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      p: [1],
      pl: [0],
      width: '175px',
      mt: [3],
      color: 'text',
      bg: 'background',
      border: 'none',
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderBottomColor: 'text',
      borderRadius: '0px',
      fontFamily: 'heading',
      fontSize: [1]
    },
    radio: {
      cursor: 'pointer'
    },
    label: {
      cursor: 'pointer'
    }
  },
  layout: {
    container: {
      maxWidth: '1150px',
      '@media only screen and (min-width: 100em)': {
        maxWidth: '1500px',
      }
    }
  },
  sizes: {
    sidebar: 500,
    chart: 400,
    main: 250
  },
  badges: {
    primary: {
      letterSpacing: 'wide',
      cursor: 'pointer', 
      color: 'primary',
      borderStyle: 'solid',
      borderColor: 'primary',
      borderWidth: '0px',
      borderBottomWidth: '1px',
      bg: 'background',
      borderRadius: '0px',
      textTransform: 'uppercase',
      mb: [2],
      pt: ['1px'],
      pb: ['2px'],
      pl: [0],
      pr: [0],
      fontSize: [1],
      fontFamily: 'monospace'
    }
  },
  links: {
    nav: {
      color: "primary",
      "&:active": {
        color: "primary",
      },
      "&:hover": {
        color: "background",
        backgroundColor: "primary"
      },
      fontFamily: 'heading',
      borderRadius: [2],
      textDecoration: "none",
      fontSize: [2],
      fontWeight: "bold",
      cursor: "pointer",
      p: [2],
      pb: [1]
    },
    arrow: {
      ml: [2], 
      fontSize: [4], 
      position: 'relative', 
      top: '4px', 
      display: 'inline-block',
      textDecoration: 'none',
      lineHeight: 0,
      cursor: 'pointer',
      color: 'text',
      '&:active': {
        color: 'text',
      },
      '&:hover': {
        color: 'secondary',
        borderColor: 'secondary'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body'
    },
    a: {
      color: 'text',
      '&:active': {
        color: 'text',
      },
      '&:hover': {
        color: 'secondary',
      },
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    hr: {
      border: 'none',
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted'
    },
    p: {
      fontFamily: 'body',
      fontSize: [2],
      fontWeight: 'body',
      letterSpacing: 'body'
    },
    h1: {
      fontFamily: 'heading',
      letterSpacing: 'heading',
      fontSize: [6, 7, 7],
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: [6],
      mb: [5]
    },
    h2: {
      fontFamily: 'heading',
      fontSize: [5],
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: [5],
      mb: [4]
    },
    h3: {
      fontFamily: 'heading',
      fontSize: [4],
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: [4],
      mb: [3],
    }
  },
  tags: {
    mineralization: 'grey',
    soil: 'orange',
    biomass: 'yellow',
    forests: 'green',
    ocean: 'teal',
    dac: 'purple',
    biochar: 'yellow',
    materials: 'yellow',
    broker: 'grey',
    beccs: 'yellow',
    reforestation: 'green',
    'avoided conversion': 'green',
    agroforestry: 'green',
    burial: 'yellow',
    phytoplankton: 'teal',
    injection: 'grey'
  }
}