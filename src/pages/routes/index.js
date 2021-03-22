import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
    Container,
    CssBaseline,
    Typography,
    Link,
} from '@material-ui/core'

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

export default class Routes extends Component {
    constructor(props){
        super()
    }

    render() {
        return (
            <>
                <CssBaseline/>
                <Container max-width="lg">
                    <Switch>
                        <Route exact path="/signup">
                            <Signup Copyright={ Copyright } />
                        </Route>
                        <Route exact path="/login">
                            <Login Copyright={ Copyright } />
                        </Route>
                        <Route exact to="/Checkout">
                            <Checkout Copyright={ Copyright } />
                        </Route>
                        <Route to="/">
                            <Home Copyright={ Copyright } />
                        </Route>
                    </Switch>
                </Container>
            </>
        )
    }
}