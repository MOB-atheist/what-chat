import React, { Component } from 'react'
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
    Typography,
    Container,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import Link from '../../components/Link'

const Styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: {
        '-webkit-text-fill-color': (theme.palette.type !== 'dark'? theme.palette.text.primary: theme.palette.text.secondary)+" !important",
        WebkitBoxShadow: "0 0 0 100px "+(theme.palette.type === 'dark' ? '#1f5656': 'rgb(232, 240, 254)')+" inset !important",
    },
})

class SignIn extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { /* theme, */ classes, Copyright, History } = this.props
        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoFocus
                            inputProps={{ className: classes.input }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            inputProps={{ className: classes.input }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Manter conectado"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Log in
                        </Button>
                        <Grid container justify="center">
                            <Grid item xs={12}>
                                <Button primary variant="body1" fullWidth onClick={() => { History.goBack() }}>Voltar</Button>
                            </Grid>
                            <Grid item xs>
                                <Link
                                    to="#"
                                    variant="body2"
                                    alias="Esqueceu a senha?"
                                />
                            </Grid>
                            <Grid item>
                                <Link
                                    to="/signup"
                                    variant="body2"
                                    alias={'Não tem uma conta? Cadastrar'}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    }
}

export default withStyles(Styles)(SignIn)
