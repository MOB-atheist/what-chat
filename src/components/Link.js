import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'

const LinkBehavior = React.forwardRef((props, ref) => {
    return <RouterLink ref={ref} {...props}>{props.alias}</RouterLink>
});

export default function LinkStyled(props, {alias}){
    return (
        <Link component={LinkBehavior} {...props}>{alias}</Link>
    )
}