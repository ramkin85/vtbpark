import {AUTOMOBILES_LIST_REQUEST, AUTOMOBILES_LIST_SUCCESS, AUTOMOBILES_LIST_FAILURE} from "../actions/actionsTypes";

const initialState = {"progress": false};
export const automobiles = (state = initialState, action) => {
    switch (action.type) {
        case AUTOMOBILES_LIST_REQUEST:
            return {
                ...state,
                "list": [],
                "progress": true
            };
        case AUTOMOBILES_LIST_SUCCESS:
            return {
                ...state,
                "list": action.value,
                "progress": false
            };
        case AUTOMOBILES_LIST_FAILURE:
            return {
                ...state,
                "error": action.value,
                "progress": false
            };
        default:
            return state;
    }
};