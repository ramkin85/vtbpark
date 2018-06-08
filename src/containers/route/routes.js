import React from 'react'
import ProtectedRoute from "./ProtectedRoute";
import {Route, Router, Switch} from "react-router-dom";
import About from "../about";
import Home from "../home";
import Cars from '../cars';
import * as link from "../../constants/links";

export function MainRoute() {

    return (
        <Switch>
            <Route exact path={link.HOME_LINK} component={Home}/>
            <ProtectedRoute exact path={link.ABOUT_LINK} component={About}/>
            <ProtectedRoute exact path={link.CARS_LINK} component={Cars}/>
        </Switch>

    );
}