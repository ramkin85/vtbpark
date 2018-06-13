import {SAVE_CURRENT_USER,REMOVE_CURRENT_USER} from "../actions/actionsTypes";
import jwt_decode from "jwt-decode";
import {saveCurrentUser} from "../actions/currentUserAction";

const initialState = {

};

let token = localStorage.getItem("token");
if (token) {
    const currentUserData = jwt_decode(token);
    initialState.data=currentUserData;
}


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