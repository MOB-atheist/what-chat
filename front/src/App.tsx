import createTheme from '@material-ui/core/styles/createTheme'
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { AuthProvider } from './modules/useAuth'
import { CssBaseline } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      light: '#890ACB',
      main: '#6F09B2',
      dark: '#3B0680',
      contrastText: '#fff'
    },
    secondary: {
      light: '#DD0BE3',
      main: '#C00BE3',
      dark: '#A20BE3',
      contrastText: '#fff'
    },
    type: 'dark'
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover': {
          backgroundColor: 'rgb(0 0 0 / 35%)'
        },
        '&:focus-within': {
          backgroundColor: 'rgb(0 0 0 / 35%)'
        },
        backgroundColor: 'rgb(0 0 0 / 50%)'
      },
      input: {
        '&:-webkit-autofill': {
          color: '#fff !important',
          appearance: 'none',
          borderTopColor: '#101010',
          borderBottomColor: '#101010',
          borderLeftColor: '#101010',
          borderRightColor: '#101010',
          caretColor: '#6F09B2',
          boxShadow: '0 0 0 1000px #101010 inset !important',
          WebkitTextFillColor: '#fff !important',
          backgroundColor: '#101010 !important',
          WebkitBoxShadow: "0 0 0 1000px #101010 inset",
        },
      },
    },
    MuiFilledInput: {
      root: {
        '&:hover': {
          backgroundColor: 'rgb(0 0 0 / 35%)'
        },
        '&:focus-within': {
          backgroundColor: 'rgb(0 0 0 / 35%)'
        },
        backgroundColor: 'rgb(0 0 0 / 50%)'
      },
      input: {
        '&:-webkit-autofill': {
          color: '#fff !important',
          appearance: 'none',
          borderTopColor: '#101010',
          borderBottomColor: '#101010',
          borderLeftColor: '#101010',
          borderRightColor: '#101010',
          caretColor: '#6F09B2',
          boxShadow: '0 0 0 1000px #101010 inset !important',
          WebkitTextFillColor: '#fff !important',
          backgroundColor: '#101010 !important',
          WebkitBoxShadow: "0 0 0 1000px #101010 inset",
        },
      },
    },
  },
})

function App(): any {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <div>#TODO</div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
