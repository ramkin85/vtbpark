import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import {successGetAutomobile, errorGetAutomobile} from "../actions/actionAutomobile";
import {errorAutomobilesList, successAutomobilesList} from "../actions/actionAutomobilesList";
import {request} from "./request";
import generateData from '../components/AutomobileGrid/TableData';

export function* getAutomobilesList(action) {
    try {
        console.log("getAutomobilesList", action);
        let res = {
            data: {
                data: []
            },
            totalCount: 0
        }
        const {func, params} = action.payload,

            send = {
                "method": "GET",
                "url": "http://smironovich.diasoft.ru:8090/automobiles",
                "params": params
            };
        // res = yield request(send);
        res.data.totalCount = 100;// mock TotalCount
        res.data.data = generateData(res.data.totalCount);// mock
        if (res.data) {
            yield put(successAutomobilesList(res.data.data));
        } else {
            yield put(errorAutomobilesList(res.error));
        }
        //func();

    } catch (error) {
        yield put(errorAutomobilesList("Ошибка " + error));
        console.error(error);
    }
}


export function* watchAutomobilesListApi() {
    yield takeEvery(actionTypes.AUTOMOBILES_LIST_REQUEST, getAutomobilesList);
}
