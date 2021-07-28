import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import { Button, Grid, Slide } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    slideRight: {
      animation: '$slideRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'+
      ` animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`
    },
    '@-webkit-keyframes slide-right': {
      '&0%': {
        WebkitTransform: 'translateX(0); transform: translateX(0);'
      },
      '&100%': {
        WebkitTransform: 'translateX(100px); transform: translateX(100px);'
      }
    },
    '@keyframes slide-right': {
      '&0%': {
        WebkitTransform: 'translateX(0); transform: translateX(0);'
      },
      '&100%': {
        WebkitTransform: 'translateX(100px); transform: translateX(100px);'
      }
    },
    slideLeft: {
      animation: '$slideLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'+
      ` animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;`
    },
    '@-webkit-keyframes slide-left': {
      '&0%': {
        WebkitTransform: 'translateX(0); transform: translateX(0);'
      },
      '&100%': {
        WebkitTransform: 'translateX(-100px); transform: translateX(-100px);'
      }
    },
    '@keyframes slide-left': {
      '&0%': {
        WebkitTransform: 'translateX(0); transform: translateX(0);'
      },
      '&100%': {
        WebkitTransform: 'translateX(-100px); transform: translateX(-100px);'
      }
    }
  })
)

const _ = (props: any) => {
  const classes = useStyles()

  return (
    <div
      className={[
        (props.open ? classes.slideRight : classes.slideLeft),
        classes.container
      ].join(' ')}
    >
      {props.open && (
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault()
            props.onSubmit(e)
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
      )}
    </div>
  )
}

export default _
