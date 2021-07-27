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
      input: {
        '&:-webkit-autofill': {
          color: '#fff !important',
          appearance: 'none',
          caretColor: '#6F09B2',
          WebkitTextFillColor: '#fff !important',
          backgroundColor: '#DD0BE3 !important',
          WebkitBoxShadow: "0 0 0 1000px #424242 inset",
        },
      },
    },
    MuiFilledInput: {
      input: {
        '&:-webkit-autofill': {
          color: '#fff !important',
          appearance: 'none',
          borderTopColor: '#535353',
          borderBottomColor: '#535353',
          borderLeftColor: '#535353',
          borderRightColor: '#535353',
          caretColor: '#6F09B2',
          boxShadow: '0 0 0 1000px #535353 inset !important',
          WebkitTextFillColor: '#fff !important',
          backgroundColor: '#535353 !important',
          WebkitBoxShadow: "0 0 0 1000px #535353 inset",
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
