import React, { Component } from 'react'
import {
    Container,
    Grid,
    Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Link from '../../components/Link'
const useStyles = (theme) => ({
    footer: {
        borderTop: `1px solid ${ theme.palette.divider }`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
})

const footers = [
    {
        title: 'CoderAhead',
        description: ['Time', 'Historia', 'Contato'],
    },
    {
        title: 'Recursos',
        description: [
            'Whatsapp Business',
            'Newsletter',
            'Painel',
        ],
    },
    {
        title: 'Legal',
        description: ['Termo de Privacidade', 'Termos de Uso'],
    },
]

class Footer extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { classes } = this.props
        return (
            <Container
                maxWidth="md"
                component="footer"
                className={classes.footer}
            >
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                gutterBottom
                            >
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link
                                            to="#"
                                            variant="subtitle1"
                                            color="textSecondary"
                                            alias={item}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}

export default withStyles(useStyles)(Footer)