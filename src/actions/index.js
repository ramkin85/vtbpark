import * as actionLogin from './actionLogin';
import * as currentUser from './currentUserAction';
import * as actionCarsList from './actionAutomobilesList';

const actions = {
    ...actionLogin,
    ...currentUser,
    ...actionCarsList
};

export {actions};