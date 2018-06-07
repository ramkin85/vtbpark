import React from 'react'

import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import MenuAppBar from '../../components/MenuAppBar/MenuAppBar';
import LoginDialog from "../loginDialog/LoginDialog";
import { LocalizeProvider } from "react-localize-redux";
import {Drawer,IconButton} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';
import Divider from "@material-ui/core/es/Divider/Divider";


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
    },
    drawerPaper: {
        width: drawerWidth,
        docked:{
            position:'static'
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
});


class App extends React.Component {
    static propTypes = {};

    state = {
        loginOpen: false,
        drawerOpen:false
    };

    onShowLogin(){
        this.setState({'loginOpen':true});
    }
    onHideLogin(){
        this.setState({'loginOpen':false});
    }
    onDrawerToggle(){
        this.setState({drawerOpen:!this.state.drawerOpen})
    }



    render() {
        const { classes } = this.props;
        const {loginOpen,drawerOpen} = this.state;

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
                    <Drawer
                        variant="persistent"
                        anchor="left"
                        open={drawerOpen}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={()=>this.onDrawerToggle()}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider/>
                        {/*<div className={classes.drawerHeader}>*/}
                            {/*<IconButton onClick={this.handleDrawerClose}>*/}
                                {/*{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}*/}
                            {/*</IconButton>*/}
                        {/*</div>*/}
                        {/*<Divider />*/}
                        {/*<List>{mailFolderListItems}</List>*/}
                        {/*<Divider />*/}
                        {/*<List>{otherMailFolderListItems}</List>*/}
                    </Drawer>
                    <main
                        className={classNames(classes.content, {
                            [classes.contentShift]: drawerOpen
                        })}
                    >
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about-us" component={About}/>
                    </main>
                </div>
                <LoginDialog open={loginOpen} onHideLogin={()=>this.onHideLogin()} />
            </LocalizeProvider>
        )
    }
}

export default withStyles(styles)(App);
