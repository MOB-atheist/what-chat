import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import { TransitionProps } from '@material-ui/core/transitions'

import { AuthContext } from './authContext'
import { Paper, Zoom, Slide, Button, Grid } from '@material-ui/core'

import Blob from './blob.svg'
import Blob2 from './blob2.svg'
import Blob3 from './blob3.svg'
import Logo from '../../logo.png'
import FormLogin from './FormLogin'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      height: '100%',
      width: '100%',
      position: 'relative',
      backgroundColor: theme.palette.background.paper
    },
    paper: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(2),
      background: `
        url(${Blob3}),
        url(${Blob}),
        url(${Blob2});`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
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
      position: 'relative',
      width: '100%'
    },
    backgrondSvg: {
      position: 'absolute',
      top: '-100%',
      left: 0,
      width: '100%'
      // height: '100%'
    },
    registerButton: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
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
  const [onLogin, setOnLogin] = React.useState(true)
  const [onRegister, setOnRegister] = React.useState(false)

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
      open={true}
      onClose={close}
      TransitionComponent={Transition}
      PaperProps={{
        className: classes.paper
      }}
    >
      <Button
        className={classes.registerButton}
        onClick={() => {
          setOnLogin(!onLogin)
          setOnRegister(!onRegister)
        }}
      >
        REGISTER
      </Button>

      <Grid
        container
        className={classes.container}
        spacing={3}
        style={{ height: '100%' }}
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.item}>
          <img src={Logo} alt="Logo" />
        </Grid>

        <Grid item xs={12} className={classes.item}>
          <FormLogin open={onLogin} />
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default _
