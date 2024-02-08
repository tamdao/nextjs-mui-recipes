'use client'
import { createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#b23442',
      light: '#b23442',
      dark: '#b23442',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F8F5F0',
      light: '#F8F5F0',
      dark: '#F8F5F0',
      contrastText: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#333',
      disabled: '#aaa',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 0 },
      },
    },
  },
})

export default theme
