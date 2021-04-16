import React, { Component } from 'react'
import clsx from 'clsx'
import {
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid,
    // useTheme
} from '@material-ui/core'
import {
    Inbox as InboxIcon,
    Mail as MailIcon,
    ChevronLeft,
    // ChevronRight,
    Menu as MenuIcon,
    WhatsApp as WhatsAppIcon,
} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import Switch from '../../components/Forms/Switch'
import PrimaryMenu from './PrimaryMenu'
import SecondaryMenu from './SecondaryMenu'

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -240,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    title: {
        flexGrow: 1,
    },
    Switch: {
        marginRight: theme.spacing(2),
    },
})

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }

    handleDrawerOpen = () => {
        this.setState({ open: true })
    }

    handleDrawerClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { /* theme, */ classes, propagateToggleDark, History, darkTheme } = this.props
        const { handleDrawerOpen, handleDrawerClose } = this
        const { open } = this.state
        return (
            <div className={classes.root}>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(
                                classes.menuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            <Grid container spacing={0} alignItems="center">
                                <Grid item>
                                    <WhatsAppIcon fontSize="large" />
                                </Grid>
                                <Grid item>What Chat</Grid>
                            </Grid>
                        </Typography>
                        <Switch
                            className={classes.Switch}
                            ToggleDark={propagateToggleDark}
                            Value={darkTheme}
                        />
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeft />
                        </IconButton>
                    </div>
                    <Divider />
                        <PrimaryMenu History={History} />
                    <Divider />
                    <List>
                        <SecondaryMenu />
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default withStyles(useStyles)(Header)
