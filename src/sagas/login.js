import {call, put, takeEvery} from 'redux-saga/effects';
import * as appActions from '../actions';
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";

export function* authorization(action) {
    try {
        console.log("authorization", action);
        const {values, func} = action.payload,
            send = {
                "header": {
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": "http://smironovich.diasoft.ru:8090/login",
                "data": JSON.stringify(values)
            },
            res = yield call(axios, send);

        console.log("res", res);

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
