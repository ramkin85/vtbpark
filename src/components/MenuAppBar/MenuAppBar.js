import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import AppBar from "@material-ui/core/AppBar"


import AccountCircle from "@material-ui/icons/AccountCircle"
import MenuIcon from "@material-ui/icons/Menu"


import classNames from 'classnames';
import {bindActionCreators} from "redux";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import * as links from "../../constants/links";

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
        isAuth: Boolean(localStorage.getItem("token"))
    };

    render() {
        const {addclasses, classes, onShowLogin,onDrawerToggle,drawerOpen,changePage} = this.props;
        const { isAuth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (

            <AppBar className={addclasses}>
                <Toolbar>
                    {isAuth && <IconButton
                        className={classNames(classes.menuButton, drawerOpen && classes.hide)}
                        color="inherit"
                        aria-label="Menu"
                        onClick={onDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>
                    }
                    <Typography variant="title" color="inherit" className={classes.homeButton} onClick={()=>changePage(links.HOME_LINK)}>
                        VTB Park
                    </Typography>
                    {!isAuth && (
                        <Button
                            onClick={onShowLogin}
                            color="inherit"
                        >
                            <AccountCircle className={classNames(classes.leftIcon)} />
                            Login
                        </Button>
                    )}

                    {isAuth && (
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

