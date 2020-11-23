import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../theme/theme'

export default function index({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
