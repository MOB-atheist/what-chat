import React, { Component } from 'react'
import {
    Container,
    Typography,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Box,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import StarIcon from '@material-ui/icons/Star'
import Link from '../../components/Link'

const useStyles = (theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
})

const tiers = [
    {
        title: 'Básico',
        price: '20',
        description: [
            '3 usuários inclusos',
            'Mensagens automáticas',
            'Help center',
        ],
        buttonText: 'Contratar',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Mais popular',
        price: '30',
        description: [
            '10 usuários inclusos',
            'Respostas automáricas',
            'Help Center',
            'Suporte por email',
        ],
        buttonText: 'Contratar',
        buttonVariant: 'contained',
    },
    {
        title: 'Empresarial',
        price: '70',
        description: [
            '50 usuários inclusos',
            'Chat Bot auomatizado',
            'Help center prioritário',
            'Suporte por email prioritário',
        ],
        buttonText: 'Contratar',
        buttonVariant: 'outlined',
    },
]

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Features',
        description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
        ],
    },
    {
        title: 'Resources',
        description: [
            'Resource',
            'Resource name',
            'Another resource',
            'Final resource',
        ],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
]

class Home extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { classes, Copyright } = this.props
        return (
            <>
                <Container
                    maxWidth="sm"
                    component="main"
                    className={classes.heroContent}
                >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        Planos
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        component="p"
                    >
                        Faça um upgrade no seu atendimento contratando um de nossos pacotes disponiveis abaixo
                    </Typography>
                </Container>
                {/* End hero unit */}
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid
                                item
                                key={tier.title}
                                xs={12}
                                sm={tier.title === 'Enterprise' ? 12 : 6}
                                md={4}
                            >
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{
                                            align: 'center',
                                        }}
                                        subheaderTypographyProps={{
                                            align: 'center',
                                        }}
                                        action={
                                            tier.title === 'Pro' ? (
                                                <StarIcon />
                                            ) : null
                                        }
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography
                                                component="h2"
                                                variant="h3"
                                                color="textPrimary"
                                            >
                                                R${tier.price}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                color="textSecondary"
                                            >
                                                /mês
                                            </Typography>
                                        </div>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography
                                                    component="li"
                                                    variant="subtitle1"
                                                    align="center"
                                                    key={line}
                                                >
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            fullWidth
                                            variant={tier.buttonVariant}
                                            color="primary"
                                        >
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/* Footer */}
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
                                                href="#"
                                                variant="subtitle1"
                                                color="textSecondary"
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </>
        )
    }
}

export default withStyles(useStyles)(Home)