import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import loginReducer from './login/reducer'

const reducer = combineReducers({
    routing: routerReducer,
    form: reduxFormReducer, // mounted under "form"
    login:loginReducer
});



export default reducer;