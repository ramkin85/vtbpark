import {SAVE_CURRENT_USER,REMOVE_CURRENT_USER} from "../actions/actionsTypes";

const initialState = {};
export const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CURRENT_USER:
            return {
                ...state,
                "data": action.payload.currentUserData
            };
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                "data": null
            };
        default:
            return state;
    }
};