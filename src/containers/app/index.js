import React from 'react'

import Automobiles from '../automobiles'

import MenuAppBar from '../../components/MenuAppBar/MenuAppBar';
import LoginDialog from "../loginDialog/LoginDialog";
import {LocalizeProvider} from "react-localize-redux";


import classNames from 'classnames';
import MainDrawer from "../../components/MainDrawer/MainDrawer";
import {MainRoute} from "../route/routes";
import withStyles from "@material-ui/core/styles/withStyles";
import commonUtils from "../../utils/common";



const drawerWidth = 240;
const mainAppBarHeight = 64;

const styles = theme => ({

    appFrame: {
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        // display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth
    },
    content: {
        flexGrow: 1,
        marginTop: mainAppBarHeight,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        padding: 0,
        height: `calc(100% - ${mainAppBarHeight}px)`,
        overflowY: 'auto',
        overflowX: 'hidden'
    },

    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth
    }
});


class App extends React.Component {
    static propTypes = {};


    state = {
        loginOpen: false,
        drawerOpen: commonUtils.isAuth()
    };

    onShowLogin(){
        this.setState({'loginOpen':true});
    }
    onHideLogin(){
        const drawerOpen = commonUtils.isAuth();
        this.setState({
            loginOpen: false,
            drawerOpen: drawerOpen
        });
    }
    onDrawerToggle(drawerOpen){
        this.setState({drawerOpen: (drawerOpen!==undefined ? drawerOpen : !this.state.drawerOpen)})
    }



    render() {
        const { classes } = this.props;
        const {loginOpen} = this.state;

        const isAuth = commonUtils.isAuth();
        const drawerOpen = isAuth && this.state.drawerOpen;

        return (
            <LocalizeProvider>
                    <div className={classes.appFrame}>
                        <MenuAppBar
                            addclasses={classNames(classes.appBar, {
                                [classes.appBarShift]: drawerOpen
                            })}
                            onDrawerToggle={()=>this.onDrawerToggle()}
                            drawerOpen={drawerOpen}
                            onShowLogin={()=>this.onShowLogin()}
                        />
                        <MainDrawer
                            drawerWidth={drawerWidth}
                            drawerOpen={drawerOpen}
                            onDrawerToggle={()=>this.onDrawerToggle()}
                        />
                    <main
                        className={classNames(classes.content, {
                            [classes.contentShift]: drawerOpen
                        })}
                    >
                        <MainRoute/>
                    </main>
                </div>
                <LoginDialog open={loginOpen} onHideLogin={()=>this.onHideLogin()} />
            </LocalizeProvider>
        )
    }
}

export default withStyles(styles)(App);
