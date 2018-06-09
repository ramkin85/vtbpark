import * as actionLogin from './actionLogin';
import * as currentUser from './currentUserAction';
import * as actionAutomobile from './actionAutomobile';
import * as actionAutomobilesList from './actionAutomobilesList';
import * as actionLogout from './actionLogout';
import * as actionNotification from "./actionNotification";

const actions = {
    ...actionLogout,
    ...actionLogin,
    ...currentUser,
    ...actionAutomobile,
    ...actionAutomobilesList,
    ...actionNotification
};

export {actions};