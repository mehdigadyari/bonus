import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'

const theme = createMuiTheme({
  direction: 'rtl',
  palette,
  spacing: 2,
  typography: {
    allVariants: {
      fontFamily: 'IRANSans'
    },
    h1: {
      fontSize: window.innerWidth > 420 ? 35 : 30,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: window.innerWidth > 420 ? 31 : 26,
      fontWeight: 'bold'
    },
    h3: {
      fontSize: window.innerWidth > 420 ? 27 : 22,
      fontWeight: 500
    },
    h4: {
      fontSize: window.innerWidth > 420 ? 23 : 18,
      fontWeight: 500
    },
    h5: {
      fontSize: window.innerWidth > 420 ? 19 : 14,
      fontWeight: 'bold'
    },
    h6: {
      fontSize: window.innerWidth > 420 ? 15 : 10,
      fontWeight: 'bold'
    },
    body1: {
      fontSize: window.innerWidth > 420 ? 18 : 13,
      fontWeight: 300
    },
    body2: {
      fontSize: window.innerWidth > 420 ? 14 : 9,
      fontWeight: 300
    },
    subtitle1: {
      fontSize: window.innerWidth > 420 ? 22 : 17,
      fontWeight: 500
    },
    subtitle2: {
      fontSize: window.innerWidth > 420 ? 14 : 9,
      fontWeight: 300
    },
    caption: {
      fontSize: window.innerWidth > 420 ? 12 : 7,
      fontWeight: 200
    },
    button: {
      fontSize: window.innerWidth > 420 ? 15 : 10
    },
    overline: {
      fontSize: window.innerWidth > 420 ? 15 : 10,
      fontWeight: 300,
      textDecoration: 'line-through',
      color: 'red'
    }
  }
})
export default responsiveFontSizes(theme)
