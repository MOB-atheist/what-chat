import React, { Component } from 'react'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {
    createMuiTheme,
    ThemeProvider,
    CssBaseline
} from "@material-ui/core";

import Routes from './pages/routes';
import Footer from './components/Footer';
import Header from  './components/Header'
import { render } from '@testing-library/react';

class App extends Component {
    constructor(props) {
        super()
        this.state = {
            darkTheme: false
        }
    }

    toggleDark = (v) => {
        this.setState({darkTheme: v})
    }

    render() {
        const { darkTheme } = this.state
        const { toggleDark } = this
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
                type: darkTheme ? 'dark' : 'light',
            },
        })
        
        return (
            <>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Header 
                            darkTheme={darkTheme}
                            propagateToggleDark={toggleDark}
                        />
                        <Routes />
                        <Footer />
                    </Router>
                </ThemeProvider>
            </>
        )
    }
}

export default App
