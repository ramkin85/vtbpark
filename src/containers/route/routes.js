import React from 'react'
import ProtectedRoute from "./ProtectedRoute";
import {Route, Router, Switch} from "react-router-dom";
import About from "../about";
import Home from "../home";
import Automobiles from '../automobiles';
import Automobile from '../automobile';
import Applications from '../applications/applications';
import Employees from '../employees/employees';
import * as link from "../../constants/links";


export function MainRoute() {

    return (
        <Switch>
            <Route exact path={link.HOME_LINK} component={Home}/>
            <ProtectedRoute exact path={link.ABOUT_LINK} component={About}/>
            <ProtectedRoute exact path={link.AUTOMOBILES_LINK} component={Automobiles}/>
            <ProtectedRoute exact path={link.AUTOMOBILE_LINK} component={Automobile}/>
            <ProtectedRoute exact path={link.APPLICATIONS_LINK} component={Applications}/>
            <ProtectedRoute exact path={link.EMPLOYEES_LINK} component={Employees}/>
        </Switch>

    );
}