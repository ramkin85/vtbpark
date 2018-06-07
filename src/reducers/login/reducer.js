import _ from "lodash";

const initialState = {
    open: false
};


const login = (state, action) => {

    if (typeof state === 'undefined') return initialState;
    let res=_.clone(state);
    if (action.type==="SHOW_LOGIN_DIALOG"){
        res=_.extend(res,{
            open:action.open
        });
    }
    return res;
};


export default login;