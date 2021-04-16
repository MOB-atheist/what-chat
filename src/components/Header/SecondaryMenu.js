import React, { Component } from 'react'

import {
    List
} from '@material-ui/core'

import {
    Lock as LockIcon,
    LockOpen as LockOpenIcon,
} from '@material-ui/icons'

import ListLink from '../System/Link'

class PrimaryMenu extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <List>
                    <ListLink
                        to="/login"
                        primary="Login"
                        icon={<LockOpenIcon />}
                    />
                </List>
                <List>
                    <ListLink
                        to="/signup"
                        primary="sair"
                        icon={<LockIcon />}
                    />
                </List>
            </>
        )
    }
}

export default PrimaryMenu 
