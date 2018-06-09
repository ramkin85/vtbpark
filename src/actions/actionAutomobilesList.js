import * as types from './actionsTypes';

export function requestAutomobilesList(values, func) {
    return {
        "type": types.CARS_LIST_REQUEST,
        "payload": {
            values,
            func
        }
    };
}

export function successAutomobilesList(value) {
    return {
        "type": types.CARS_LIST_SUCCESS,
        value
    };
}

export function errorAutomobilesList(value) {
    return {
        "type": types.CARS_LIST_FAILURE,
        value
    };
}