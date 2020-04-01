export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'LeagueSpartan',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.45,
    heading: 1.125,
  },
  colors: {
    text: 'rgb(10,10,10)',
    background: 'rgb(245,245,245)',
    primary: 'rgb(53,53,53)',
    secondary: 'rgb(80,80,80)',
    muted: 'rgb(0,0,0)',
    modes: {
      dark: {
        text: 'rgb(245,245,245)',
        background: 'rgb(31,31,31)',
        primary: 'rgb(230,230,230)',
        secondary: 'rgb(224, 224, 224)',
        muted: 'rgb(255,255,255)',
      }
    }
  },
  text: {
    link: {
      cursor: 'pointer'
    }
  },
  links: {
    nav: {
      color: "primary",
      "&.active": {
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
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    a: {
      color: "text",
      "&:active": {
        color: "text",
      },
      "&:hover": {
        color: "muted",
        borderBottom: 'solid',
        borderWidth: [2]
      },
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer"
    }
  }
}
