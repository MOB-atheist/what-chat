import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Pricing from '../../components/Pricing'

const useStyles = (theme) => ({
    
})

class Home extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { classes, Copyright } = this.props
        return (
            <>
                <Pricing Copyright={ Copyright } />
            </>
        )
    }
}

export default withStyles(useStyles)(Home)