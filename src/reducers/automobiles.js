import {AUTOMOBILES_LIST_REQUEST, AUTOMOBILES_LIST_SUCCESS, AUTOMOBILES_LIST_FAILURE} from "../actions/actionsTypes";

const initialState = {
    "progress": false,
    "list": {
        data:[],
        totalCount:0
    }
};
export const automobiles = (state = initialState, action) => {
    switch (action.type) {
        case AUTOMOBILES_LIST_REQUEST:
            return {
                ...state,
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
