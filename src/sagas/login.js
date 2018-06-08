import {call, put, takeEvery} from 'redux-saga/effects';
import * as appActions from '../actions';
import * as actionTypes from '../actions/actionsTypes.js';

export function* authorization(action) {
    try {
        console.log("authorization", action);
        const {values, func} = action.payload;

        if (values.login === values.password) {
            func();
            localStorage.setItem("token", values.login);
        }

    } catch (error) {
        console.error(error);
    }
}


export function* watchLoginApi() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, authorization);
}
