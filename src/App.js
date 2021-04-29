import React, { Component } from 'react'

import {
    BrowserRouter as Router
} from 'react-router-dom'
import {
    createMuiTheme,
    ThemeProvider,
    CssBaseline
} from "@material-ui/core";

import Routes from './pages/routes'
// import { render } from '@testing-library/react';

// import { useSelector, useDispatch } from 'react-redux';
import { Change } from './Reducer';


class App extends Component {
    constructor(props) {
        super()
        this.state = {
            darkTheme: props.darkTheme
        }
    }

    toggleDark = (v) => {
        this.props.dispatch(Change(v))
        this.setState({darkTheme: v})
    }

    render() {
        const { darkTheme } = this.state
        const { toggleDark } = this
        const theme = createMuiTheme({
            overrides: {
                MuiCssBaseline: {
                    '@global': {
                        input: {
                            WebkitBoxShadow: "0 0 0 100px "+(darkTheme ? '#303030': '#fafafa')+" inset !important",
                        },
                    }
                }
            },
            palette: {
                primary: {
                    light: "#4FB0C6",
                    main: "#379392",
                    dark: "#1e4c4c",
                },
                secondary: {
                    light: "#00FF97",
                    main: "#00D982",
                    dark: "#005936",
                },
                type: darkTheme ? 'dark' : 'light',
            },
        })
        // #1b403f
        return (
            <>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Routes toggleDark={toggleDark} darkTheme={darkTheme}/>
                    </Router>
                </ThemeProvider>
            </>
        )
    }
}

export default App
