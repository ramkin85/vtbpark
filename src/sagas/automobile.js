import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import {successGetAutomobile, errorGetAutomobile} from "../actions/actionAutomobile";
import commonUtils from "../utils/common";
import {REQUEST_AUTOMOBILE_URL} from "../constants/settings";



export function* getAutomobile(action) {
    try {
        console.log("getAutomobile", action);
        const {values, func} = action.payload,

            send = {
                "headers": {
                    "Authorization": commonUtils.getToken(),
                    "Access-Control-Expose-Headers": "Authorization, X-Authorization",
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                "method": "GET",
                "url": REQUEST_AUTOMOBILE_URL,
                "data": values
            },
            res = yield call(axios, send);

            yield put(successGetAutomobile());
            func();

    } catch (error) {
        yield put(errorGetAutomobile("Ошибка "+error));
        console.error(error);
    }
}


export function* watchGetAutomobileApi() {
    yield takeEvery(actionTypes.GET_AUTOMOBILE_REQUEST, getAutomobile);
}
