import React from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core";

import Routes from './pages/routes';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#4FB0C6",
            main: "#379392",
            dark: "#17301C",
        },
        secondary: {
            light: "#00FF97",
            main: "#00D982",
            dark: "#005936",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    )
}

export default App
