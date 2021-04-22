import React, { Component } from 'react'

import {
    List,
} from '@material-ui/core'

import {
    Mail as MailIcon,
    Home as  HomeIcon,
} from '@material-ui/icons'

import ListLink from '../System/Link'
class PrimaryMenu extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { History } = this.props
        return (
            <>
                <List>
                    <ListLink
                        to="/"
                        primary="Inicio"
                        icon={<HomeIcon />}
                        History={History}
                    />
                </List>
                <List>
                    <ListLink
                        to="/Checkout"
                        primary="Checkout"
                        icon={<MailIcon />}
                        History={History}
                    />
                </List>
            </>
        )
    }
}

export default PrimaryMenu 
