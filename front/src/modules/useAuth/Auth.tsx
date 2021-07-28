import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import { TransitionProps } from '@material-ui/core/transitions'

import { AuthContext } from './authContext'
import { Paper, Zoom, Slide, Button } from '@material-ui/core'

import Blob from './blob.svg'
import Blob2 from './blob2.svg'
import Blob3 from './blob3.svg'
import FormLogin from './FormLogin'

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
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
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
    >
      <div className={classes.background}>
        <img className={classes.backgrondSvg} src={Blob3} alt="blob3" />
        <img className={classes.backgrondSvg} src={Blob} alt="blob" />
        <img className={classes.backgrondSvg} src={Blob2} alt="blob2" />
      </div>
      <Paper className={classes.paper}>
        <Button
          className={classes.registerButton}
          onClick={() => {
            setOnLogin(!onLogin)
            setOnRegister(!onRegister)
          }}
        >
          REGISTER
        </Button>

        <FormLogin
          open={onLogin}
        />

        {/* <FormLogin
          open={onRegister}
        /> */}
      </Paper>
    </Dialog>
  )
}

export default _
