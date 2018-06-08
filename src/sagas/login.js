import {call, put, takeEvery} from 'redux-saga/effects';
import {saveCurrentUser} from "../actions/currentUserAction";
import {successLogin, errorLogin} from "../actions/actionLogin";
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import jwt_decode from "jwt-decode";
import * as currentUser from "../actions/currentUserAction";


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
        debugger;
        console.log("res", res);
        console.log(axios.defaults.headers);

        let token =res && res.headers && res.headers.authorization; //"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTUyOTMxNTA1Nywicm9sZXMiOlsiUk9MRV9TQUxFUyJdfQ.oNKEsdJHomEMbFaZ0-3q45otBzrgbQmtzwNtThBO3kPiQKHyXL2QtOCM57ehqKk6ClRmhN4I7h7KBc_atIXlGw";

        if (token) {
            yield put(successLogin());
            const decoded = jwt_decode(token);
            yield put(saveCurrentUser(decoded));
            localStorage.setItem("token", token);
            func();
        } else {
            yield put(errorLogin("Некорректный логин/пароль"));
        }

    } catch (error) {
        yield put(errorLogin("Некорректный логин/пароль"));
        console.error(error);
    }
}


export function* watchLoginApi() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, authorization);
}
