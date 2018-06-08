import {call, put, takeEvery} from 'redux-saga/effects';
import * as appActions from '../actions';
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import jwt_decode from "jwt-decode";

export function* authorization(action) {
    try {
        console.log("authorization", action);
        const {values, func} = action.payload,
            send = {
                "headers": {
                    "Authorization":"",
                    "Access-Control-Expose-Headers":"Authorization, X-Authorization",
                    "Access-Control-Allow-Origin":"*",
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": "http://smironovich.diasoft.ru:8090/login",
                "data": JSON.stringify(values)
            },
            res = yield call(axios, send);

        console.log("res", res);
        console.log(axios.defaults.headers);
        let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTUyOTMxNTA1Nywicm9sZXMiOlsiUk9MRV9TQUxFUyJdfQ.oNKEsdJHomEMbFaZ0-3q45otBzrgbQmtzwNtThBO3kPiQKHyXL2QtOCM57ehqKk6ClRmhN4I7h7KBc_atIXlGw";
        var decoded = jwt_decode(token);
        console.log(decoded);

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
