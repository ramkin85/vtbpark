import {SAVE_CURRENT_USER} from "../actions/actionsTypes";

const initialState = {};
export const currentUser = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CURRENT_USER:
            return {
                ...state,
                "data": action.payload.currentUserData
            }
        default:
            return state;
    }
};