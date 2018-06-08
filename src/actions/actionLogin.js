import * as types from './actionsTypes';

export function requestLogin(values, func) {
    return {
        "type": types.LOGIN_REQUEST,
        "payload": {
            values,
            func
        }
    };
}

export function successLogin(value) {
    return {
        "type": types.LOGIN_SUCCESS,
        value
    };
}

export function errorLogin(value) {
    return {
        "type": types.LOGIN_FAILURE,
        value
    };
}

