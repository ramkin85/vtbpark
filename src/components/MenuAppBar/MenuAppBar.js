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
import * as appActions from '../../actions';

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
        isAuth: false,
        userMenuOpen:false,
        menuAnchorEl: null,
        userName:""
    };

    handleMenu(event,flag){
        if (!this.state.menuAnchorEl && event && event.currentTarget){
            this.setState({
                menuAnchorEl:event.currentTarget
            });
        }
        this.setState({
            userMenuOpen: flag!=null ? flag : !this.state.userMenuOpen
        });
    }

    logout(event){
        this.setState({
            userMenuOpen:false
        });
        const {actions} = this.props;
        this.props.onDrawerToggle(false);
        actions.requestLogout();
    }

    render() {
        const {addclasses, classes, onShowLogin,onDrawerToggle,drawerOpen,changePage,userName} = this.props;
        const { userMenuOpen,menuAnchorEl} = this.state;
        const isAuth = Boolean(localStorage.getItem("token"));

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
                            <Button
                                aria-owns={userMenuOpen ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={(event)=>{this.handleMenu(event,true)}}
                                color="inherit"
                            >
                                <AccountCircle  className={classNames(classes.leftIcon)} />
                                {userName}
                            </Button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={menuAnchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={userMenuOpen}
                                onClose={()=>{this.handleMenu(false)}}
                            >
                                <MenuItem onClick={(event)=>{this.handleMenu(event,false)}}>Профиль</MenuItem>
                                <MenuItem onClick={(event)=>{this.logout(event)}}>Выход</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.currentUser && state.currentUser.data && state.currentUser.data.sub
    }
};

function mapDispatchToProps(dispatch) {
    return {
        changePage: (url) => push(url),
        actions: bindActionCreators(appActions.actions, dispatch)
    };
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MenuAppBar))

