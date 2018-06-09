import * as types from './actionsTypes';

export function requestAutomobilesList(params, func) {
    return {
        "type": types.AUTOMOBILES_LIST_REQUEST,
        "payload": {
            params,
            func
        }
    };
}

export function successAutomobilesList(value) {
    return {
        "type": types.AUTOMOBILES_LIST_SUCCESS,
        value
    };
}

export function errorAutomobilesList(value) {
    return {
        "type": types.AUTOMOBILES_LIST_FAILURE,
        value
    };
}