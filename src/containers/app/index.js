import React from 'react'

import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import MenuAppBar from '../../components/MenuAppBar/MenuAppBar';
import LoginDialog from "../loginDialog/LoginDialog";
import { LocalizeProvider } from "react-localize-redux";
import {Drawer} from "@material-ui/core/es"

class App extends React.Component {
    static propTypes = {};

    state = {
        loginOpen: false,
        drawerOpen:true
    };

    onShowLogin(){
        this.setState({'loginOpen':true});
    }
    onHideLogin(){
        this.setState({'loginOpen':false});
    }
    onDrawerToggle(){
        debugger;
        this.setState({drawerOpen:true})
    }



    render() {
        //const { loginOpen } = this.props;
        const {loginOpen,drawerOpen} = this.state;

        return (
            <LocalizeProvider>
                <MenuAppBar
                    onDrawerToggle={()=>this.onDrawerToggle()}
                    onShowLogin={()=>this.onShowLogin()}
                />
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{
                        //paper: classes.drawerPaper,
                    }}
                >
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
                <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about-us" component={About}/>
                </main>
                <LoginDialog open={loginOpen} onHideLogin={()=>this.onHideLogin()} />
            </LocalizeProvider>
        )
    }
}


export default App;