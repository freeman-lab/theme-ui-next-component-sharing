module.exports = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#A879A5'
  },
  fonts: {
    body: 'relative-book-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
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
      cursor: 'pointer',
    },
  },
}