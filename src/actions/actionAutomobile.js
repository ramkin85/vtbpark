import * as types from "./actionsTypes";

export function requestGetAutomobile(values, func) {
    return {
        "type": types.GET_AUTOMOBILE_REQUEST,
        "payload": {
            values,
            func
        }
    };
}

export function successGetAutomobile(value) {
    return {
        "type": types.GET_AUTOMOBILE_SUCCESS,
        value
    };
}

export function errorGetAutomobile(value) {
    return {
        "type": types.GET_AUTOMOBILE_FAILURE,
        value
    };
}
