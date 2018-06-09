import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import {errorAutomobilesList, successAutomobilesList} from "../actions/actionAutomobilesList";
import generateData from '../components/AutomobileGrid/TableData';
import getColumns from '../components/AutomobileGrid/TableColumns';
import _ from "lodash";

const TABLE_DATA = generateData(100);
const TABLE_COLUMNS = getColumns();

export function* getAutomobilesList(action) {
    try {
        console.log("getAutomobilesList", action);
        let res = {
            data: {
                data: []
            },
            totalCount: 0
        };
        const {func, params} = action.payload,

            send = {
                "method": "GET",
                "url": "http://smironovich.diasoft.ru:8090/automobiles",
                "params": params
            };
        // res = yield request(send);
        res.data.data = _.filter(TABLE_DATA, function (item) {
            if (["", undefined].indexOf(params.filterStr) > -1) return true;
            let rg = new RegExp(params.filterStr, "gi");
            let res = false;
            _.each(TABLE_COLUMNS, function (col) {
                if ((item[col.key] + '').search(rg) > -1) {
                    res = true;
                    return false;
                }
            });
            return res;
        });

        if (params.orderBy) {
            let orderByData = params.orderBy.split(" ");
            let key = orderByData[0];
            let order = orderByData[1];
            res.data.data = _.orderBy(res.data.data, [function (o) {
                return o[key];
            }], [order])
        }


        res.data.totalCount = res.data.data.length;// mock TotalCount
        res.data.data=_.chunk(res.data.data, 10)[params.page] || [];


        if (res.data) {
            yield put(successAutomobilesList(res.data));
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
