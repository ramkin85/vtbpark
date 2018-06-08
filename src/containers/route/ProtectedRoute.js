import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from "../home";
// import {moduleName} from '../../ducks/auth'
// import UnAuthorized from './UnAuthorized'

class ProtectedRoute extends Component {
    static propTypes = {};

    render() {
        console.log("props", this.props.component);
        const {component, ...rest} = this.props;
        return <Route {...rest} render={this.renderProtected}/>
    }

    renderProtected = (routeProps) => {
        const {"component": ProtectedComponent} = this.props;
        return localStorage.getItem("token") ? <ProtectedComponent {...routeProps}/> : <Redirect to={{"pathname": "/"}}/>
    }
}


export default connect(state => ({
    currentUser: state.currentUser
    // authorized: !!state[moduleName].user
}), null, null, {pure: false})(ProtectedRoute)

