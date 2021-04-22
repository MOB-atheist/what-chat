import React, { Component } from 'react'
import {
    Typography,
    Grid,
    TextField,
    FormControlLabel,
    Checkbox
}from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({})

class PaymentForms extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { classes, Copyright } = this.props
        return (
            <>
                <Typography variant="h6" gutterBottom>
                    Metodo de pagamento
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cardName"
                            label="Nome no cartão"
                            fullWidth
                            autoComplete="cc-name"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cardNumber"
                            label="Numero do cartão"
                            fullWidth
                            autoComplete="cc-number"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="expDate"
                            label="Data de validade"
                            fullWidth
                            autoComplete="cc-exp"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="cvv"
                            label="CVV"
                            helperText="Tes digitos atrás do cartão"
                            fullWidth
                            autoComplete="cc-csc"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="secondary"
                                    name="saveCard"
                                    value="yes"
                                />
                            }
                            label="Remember credit card details for next time"
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(useStyles)(PaymentForms)
