import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import {successGetAutomobile, errorGetAutomobile} from "../actions/actionAutomobile";




export function* getAutomobile(action) {
    try {
        console.log("getAutomobile", action);
        const {values, func} = action.payload,
            send = {
                "headers": {
                    "Authorization": localStorage.getItem("token"),
                    "Access-Control-Expose-Headers": "Authorization, X-Authorization",
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                "method": "POST",
                "url": "http://smironovich.diasoft.ru:8090/automobile",
                "data": JSON.stringify(values)
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
