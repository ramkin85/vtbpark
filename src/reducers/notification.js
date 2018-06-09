import {SHOW_NOTIFICATION,HIDE_NOTIFICATION} from "../actions/actionsTypes";

const initialState = {
    open:false,
    message:"",
    type:'info'
};
export const notification = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {
                ...state,
                message:action.payload.data.message,
                type:action.payload.data.type,
                open:true
            };
        case HIDE_NOTIFICATION:
            return {
                ...state,
                open:false,
                message:""
            };
        default:
            return state;
    }
};