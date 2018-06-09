import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAvailableLinks} from "../../utils/getAvailableLinks";
import * as _roles from "../../constants/roles";
import * as links from "../../constants/links";

class ProtectedRoute extends Component {
    static propTypes = {};

    render() {
        const {component, ...rest} = this.props;
        return <Route {...rest} render={this.renderProtected}/>
    }

    renderProtected = (routeProps) => {
        const {"component": ProtectedComponent, path, currentUser} = this.props,
            {roles = []} = currentUser,
            //availableLinks = getAvailableLinks([_roles.ADMINISTRATOR]) || [],// mock
            availableLinks = getAvailableLinks(roles) || [], //Todo: Получить роли у текующего юзера
            isAccess = Boolean(localStorage.getItem("token")) && availableLinks.includes(path);

        return isAccess ? <ProtectedComponent {...routeProps}/> : <Redirect to={{"pathname": links.HOME_LINK}}/>
    }
}


export default connect(state => ({
    currentUser: state.currentUser
    // authorized: !!state[moduleName].user
}), null, null, {pure: false})(ProtectedRoute)

