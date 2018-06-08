import * as actionLogin from './actionLogin';
import * as currentUser from './currentUserAction';

const actions = {
    ...actionLogin,
    ...currentUser
};

export {actions};