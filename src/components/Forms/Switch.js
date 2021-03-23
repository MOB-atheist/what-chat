import React, { Component } from 'react'
import { 
    withStyles,
    Switch,
    FormGroup
} from '@material-ui/core'

const useStyles = (theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
})

class CustomSwitch extends Component {
    constructor(props) {
        super()
        this.state = {
            checked: false,
        }
    }

    handleChange = (event) => {
        this.props.ToggleDark(event.target.checked)
        this.setState({ checked: event.target.checked })
    }

    render() {
        const { classes, className } = this.props
        const { checked } = this.state
        return (
            <FormGroup>
                <Switch
                    checked={checked}
                    onChange={this.handleChange}
                    focusVisibleClassName={classes.focusVisible}
                    disableRipple
                    className={className}
                />
            </FormGroup>
        )
    }
}

export default withStyles(useStyles)(CustomSwitch)
