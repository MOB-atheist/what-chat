import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import TextField from '@material-ui/core/TextField'
import { TransitionProps } from '@material-ui/core/transitions'

import { AuthContext } from './authContext'
import { Button, FormControl, Grid, Paper, Zoom } from '@material-ui/core'

import Blob from './blob.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      height: '100%',
      width: '100%',
      position: 'relative'
    },
    paper: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(2)
    },
    form: {
      height: '100%',
      width: '100%'
    },
    container: {
      height: '100%'
    },
    item: {
      textAlign: 'center'
    },
    input: {
      width: '50%'
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.5,
      backgroundColor: '#000'
    },
    backgrondSvg: {
      position: 'absolute',
      top: 50,
      left: 0,
      width: '100%',
      height: '100%'
    }
  })
)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />
})

const _ = () => {
  const { authState, dispatch } = React.useContext(AuthContext)

  const classes = useStyles()

  const close = () => {
    dispatch({
      authOpen: false
    })
  }

  return (
    <Dialog
      fullScreen
      className={classes.dialog}
      open={authState.authOpen}
      onClose={close}
      TransitionComponent={Transition}
    >
      <div className={classes.background}>
        <img className={classes.backgrondSvg} src={Blob} alt="blob" />
      </div>
      <Paper className={classes.paper}>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault()
            close()
          }}
        >
          <Grid
            container
            className={classes.container}
            spacing={3}
            style={{ height: '100%' }}
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={12} className={classes.item}>
              <h2>Login</h2>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justify="center"
              className={classes.item}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  margin="normal"
                  variant="filled"
                  type="text"
                  label="Nickname"
                  id="nickname"
                  name="nickname"
                  autoComplete="nickname"
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justify="center"
              className={classes.item}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  variant="filled"
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  autoComplete="password"
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justify="center"
              className={classes.item}
            >
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Dialog>
  )
}

export default _
