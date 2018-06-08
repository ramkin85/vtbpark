import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import {currentUser} from "./currentUser";
import {login} from "./login";


const reducer = combineReducers({
    routing: routerReducer,
    form: reduxFormReducer, // mounted under "form"
    currentUser: currentUser,
    "login": login,
});



export default reducer;