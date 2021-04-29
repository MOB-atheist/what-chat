import React, { Component } from 'react'
import {
    Switch,
    Route,
    //BrowserRouter as Router,
    withRouter,
} from 'react-router-dom'

import {
    Container,
    Typography,
    Link,
} from '@material-ui/core'

import Footer from '../../components/Footer'
import Header from  '../../components/Header'

import Home from '../home'
import Login from '../Login'
import Signup from '../signup'
import Checkout from '../checkout'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                CoderAhead
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

class Routes extends Component {
    constructor(props){
        super()
    }

    render() {
        const { theme, darkTheme, toggleDark, history } = this.props
        return (
            <>
                <Container max-width="lg">
                    <Switch>
                        <Route exact path="/signup">
                            <Signup Copyright={ Copyright } theme={theme} />
                        </Route>
                        <Route exact path="/login">
                            <Login Copyright={ Copyright } theme={theme} History={ history }/>
                        </Route>
                        <Route exact path="/Checkout">
                            <Header History={history} propagateToggleDark={toggleDark}/>
                                <Checkout Copyright={ Copyright } theme={theme} />
                            <Footer />
                        </Route>
                        <Route exact path="/Chat">
                            <Header History={history} propagateToggleDark={toggleDark} darkTheme={darkTheme}/>
                                <Checkout Copyright={ Copyright } theme={theme} />
                            <Footer />
                        </Route>
                        <Route path="/">
                            <Header History={history} propagateToggleDark={toggleDark} darkTheme={darkTheme}/>
                                <Home Copyright={ Copyright } theme={theme} />
                            <Footer />
                        </Route>
                    </Switch>
                </Container>
            </>
        )
    }
}

export default withRouter(Routes)