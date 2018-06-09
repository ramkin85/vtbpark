import * as types from './actionsTypes';

export function requestLogout(values, func) {
    return {
        "type": types.LOGOUT_REQUEST,
        "payload": {
            values,
            func
        }
    };
}

export function successLogout(value) {
    return {
        "type": types.LOGOUT_SUCCESS,
        value
    };
}

export function errorLogout(value) {
    return {
        "type": types.LOGOUT_FAILURE,
        value
    };
}


