import * as actionLogin from './actionLogin';
import * as currentUser from './currentUserAction';
import * as actionAutomobile from './actionAutomobile';
import * as actionAutomobilesList from './actionAutomobilesList';

const actions = {
    ...actionLogin,
    ...currentUser,
    ...actionAutomobile,
    ...actionAutomobilesList
};

export {actions};