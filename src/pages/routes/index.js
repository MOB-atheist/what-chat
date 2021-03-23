import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
    Container,
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
        const { theme } = this.props
        return (
            <>
                <Container max-width="lg">
                    <Switch>
                        <Route exact path="/signup">
                            <Signup Copyright={ Copyright } theme={theme} />
                        </Route>
                        <Route exact path="/login">
                            <Login Copyright={ Copyright } theme={theme} />
                        </Route>
                        <Route exact path="/Checkout">
                            <Checkout Copyright={ Copyright } theme={theme} />
                        </Route>
                        <Route path="/">
                            <Home Copyright={ Copyright } theme={theme} />
                        </Route>
                    </Switch>
                </Container>
            </>
        )
    }
}