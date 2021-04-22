import React, { Component } from 'react'
import {
    Typography,
    AppBar,
    Toolbar,
    Paper,
    Stepper,
    Step,
    Button,
    StepLabel
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import AddressForm from '../../components/Forms/AddressForm'
import PaymentForm from '../../components/Forms/PaymentForm'
import Review from '../../components/Cards/PreviewCheckout'

const useStyles = (theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
})

const steps = ['Shipping address', 'Payment details', 'Review your order']

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            activeStep: 0,
        }
    }

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return <AddressForm />
            case 1:
                return <PaymentForm />
            case 2:
                return <Review />
            default:
                throw new Error('Unknown step')
        }
    }

    handleNext = () => {
        this.setState({ activeStep: this.state.activeStep + 1 })
    }

    handleBack = () => {
        this.setState({ activeStep: this.state.activeStep - 1 })
    }

    render() {
        const { getStepContent, handleBack, handleNext } = this
        const { theme, classes, Copyright } = this.props
        const { activeStep } = this.state
        return (
            <>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Checkout
                        </Typography>
                        <Stepper
                            activeStep={activeStep}
                            className={classes.stepper}
                        >
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your order number is #2001539. We have
                                        emailed your order confirmation, and
                                        will send you an update when your order
                                        has shipped.
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button
                                                onClick={handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1
                                                ? 'Place order'
                                                : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>
                    <Copyright />
                </main>
            </>
        )
    }
}

export default withStyles(useStyles)(Home)
