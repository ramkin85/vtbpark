import * as actionLogin from './actionLogin';
import * as currentUser from './currentUserAction';
import * as actionAutomobile from './actionAutomobile';

const actions = {
    ...actionLogin,
    ...currentUser,
    ...actionAutomobile
};

export {actions};