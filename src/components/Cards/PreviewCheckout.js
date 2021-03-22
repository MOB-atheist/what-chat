import React, { Component } from 'react'
import {
    Typography,
    Grid,
    TextField,
    FormControlLabel,
    Checkbox
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const useStyles = (theme) => ({})

class PreviewCheckout extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { classes, Copyright } = this.props
        return (
            <>
                <Typography variant="h6" gutterBottom>
                    Shipping address
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="shipping address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="shipping address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="secondary"
                                    name="saveAddress"
                                    value="yes"
                                />
                            }
                            label="Use this address for payment details"
                        />
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(useStyles)(PreviewCheckout)
