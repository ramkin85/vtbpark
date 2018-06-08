import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {MenuItem, Menu, Button, IconButton, Typography, Toolbar , AppBar} from "@material-ui/core"
import {AccountCircle, Menu as MenuIcon} from "@material-ui/icons"
import classNames from 'classnames';
import {bindActionCreators} from "redux";
import {push} from "react-router-redux";
import {connect} from "react-redux";

const styles = theme => ({

    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    hide: {
        display: 'none',
    },
    homeButton:{
        cursor:'pointer',
        flex: 1
    }
});



class MenuAppBar extends React.Component {

    state = {
        auth: localStorage.getItem("token")
    };

    render() {
        const {addclasses, classes, onShowLogin,onDrawerToggle,drawerOpen,changePage} = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
console.log("auth", auth);
        return (

                <AppBar className={addclasses}>
                    <Toolbar>
                        <IconButton
                            className={classNames(classes.menuButton, drawerOpen && classes.hide)}
                            color="inherit"
                            aria-label="Menu"
                            onClick={onDrawerToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.homeButton} onClick={()=>changePage("/")}>
                            VTB Park
                        </Typography>
                        {!localStorage.getItem("token") && (
                            <Button
                                onClick={onShowLogin}
                                color="inherit"
                            >
                                <AccountCircle className={classNames(classes.leftIcon)} />
                                Login
                            </Button>
                        )}

                        {localStorage.getItem("token") && (
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (url) => push(url)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MenuAppBar))

