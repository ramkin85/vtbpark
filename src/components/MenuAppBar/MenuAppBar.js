import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {MenuItem, Menu, Button, IconButton, Typography, Toolbar , AppBar} from "@material-ui/core"
import {AccountCircle, Menu as MenuIcon} from "@material-ui/icons"
import classNames from 'classnames';

const styles = theme => ({
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    }
});



class MenuAppBar extends React.Component {

    state = {
        auth: false,
        anchorEl: null,
    };

    render() {
        const { classes, onShowLogin,onDrawerToggle} = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (

                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon
                                onClick={onDrawerToggle}
                            />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            VTB Park
                        </Typography>
                        {!auth && (
                            <Button
                                onClick={onShowLogin}
                                color="inherit"
                            >
                                <AccountCircle className={classNames(classes.leftIcon, classes.iconSmall)} />
                                Login
                            </Button>
                        )}

                        {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
        );
    }
}

export default withStyles(styles)(MenuAppBar);