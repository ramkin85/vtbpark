import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/actionsTypes";

const initialState = {"progress": false};
export const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                "progress": true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                "progress": false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                "error": action.value,
                "progress": false
            };
        default:
            return state;
    }
};