import {call, put, takeEvery} from 'redux-saga/effects';
import {saveCurrentUser} from "../actions/currentUserAction";
import {errorLogin, successLogin} from "../actions/actionLogin";
import {showNotification} from "../actions/actionNotification";
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import jwt_decode from "jwt-decode";
import {REQUEST_LOGIN_URL} from "../constants/settings";


export function* authorization(action) {
    try {
        console.log("authorization", action);
        const {values, func} = action.payload,
            send = {
                "headers": {
                    "Authorization": localStorage.getItem("token"),
                    "Access-Control-Expose-Headers": "Authorization, X-Authorization",
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url":  REQUEST_LOGIN_URL,
                "data": JSON.stringify(values)
            },
            res = yield call(axios, send);

        let token = res && res.headers && res.headers.authorization;

        if (token) {
            yield put(successLogin());
            const decoded = jwt_decode(token);
            yield put(saveCurrentUser(decoded));
            localStorage.setItem("token", token);
            yield put (showNotification({type:'success',message:"Добро пожаловать, "+decoded.sub}));
            func();
        } else {
            yield put(errorLogin("Некорректный логин/пароль"));
            yield put (showNotification({type:'error',message:"Некорректный логин/пароль"}));
        }

    } catch (error) {
        yield put(errorLogin("Некорректный логин/пароль"));
        yield put (showNotification({type:'error',message:"Некорректный логин/пароль"}));
        console.error(error);
    }
}


export function* watchLoginApi() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, authorization);
}
