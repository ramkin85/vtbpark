import {call, put, takeEvery} from 'redux-saga/effects';
import {removeCurrentUser} from "../actions/currentUserAction";
import {successLogout, errorLogout} from "../actions/actionLogout";
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import {showNotification} from "../actions/actionNotification";


export function* logout(action) {
    try {
        console.log("logout", action);
        localStorage.removeItem("token");
        yield put(removeCurrentUser());
        yield put(showNotification({
            type:"info",
            message:"До свидания"
        }));
        const {values, func} = action.payload,
            send = {
                "headers": {
                    "Authorization": "",
                    "Access-Control-Expose-Headers": "Authorization, X-Authorization",
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": "http://smironovich.diasoft.ru:8090/logout",
                "data": JSON.stringify(values)
            },
            res = yield call(axios, send);

            if (res.data==="OK") { //TODO refactor this case
                yield put(successLogout());
                func();
            } else {
                yield put(errorLogout());
            }

    } catch (error) {
        yield put(errorLogout());
        console.error(error);
    }
}


export function* watchLogoutApi() {
    yield takeEvery(actionTypes.LOGOUT_REQUEST, logout);
}
