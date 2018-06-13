import {call, put, takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsTypes.js';
import axios from "axios";
import {errorAutomobilesList, successAutomobilesList} from "../actions/actionAutomobilesList";
import generateData from '../components/AutomobileGrid/TableData';
import getColumns from '../components/AutomobileGrid/TableColumns';
import _ from "lodash";
import {request} from "./request";
import {showNotification} from "../actions/actionNotification";

import {GET_AUTOMOBILE_LIST_ERROR} from "../constants/errorMessages";
import {REQUEST_AUTOMOBILE_LIST_URL} from "../constants/settings";
import commonUtils from "../utils/common";

const TABLE_DATA = generateData(100);
const TABLE_COLUMNS = getColumns();


export function* getAutomobilesList(action) {

    try {
        let res = {
            data: {
                data: []
            },
            totalCount: 0
        };
        const {func, params} = action.payload,

            send = {
                "headers": {
                    "Authorization": commonUtils.getToken(),
                    "Access-Control-Expose-Headers": "Authorization, X-Authorization",
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                "method": "GET",
                "url": REQUEST_AUTOMOBILE_LIST_URL,
                "params": params
            };
        res = yield request(send);

        let response={
            data:[],
            totalCount:0
        };

        if (res && res.data && res.data._embedded){
            _.extend(response,{
                //data:res.data.content,
                data:res.data._embedded.cars,
                totalCount:res.data.page.totalElements
                //totalCount:res.data.totalElements
            });
        }


        // res.data.data = _.filter(TABLE_DATA, function (item) {
        //     if (["", undefined].indexOf(params.filterStr) > -1) return true;
        //     let rg = new RegExp(params.filterStr, "gi");
        //     let res = false;
        //     _.each(TABLE_COLUMNS, function (col) {
        //         if ((item[col.key] + '').search(rg) > -1) {
        //             res = true;
        //             return false;
        //         }
        //     });
        //     return res;
        // });
        //
        // if (params.orderBy) {
        //     let orderByData = params.orderBy.split(" ");
        //     let key = orderByData[0];
        //     let order = orderByData[1];
        //     res.data.data = _.orderBy(res.data.data, [function (o) {
        //         return o[key];
        //     }], [order])
        // }
        //
        //
        // res.data.totalCount = res.data.data.length;// mock TotalCount
        // res.data.data=_.chunk(res.data.data, 10)[params.page] || [];


        if (res.data) {
            yield put(successAutomobilesList(response));
        } else {
            yield put(errorAutomobilesList(res.error));
            yield put(showNotification({type:'error',message:GET_AUTOMOBILE_LIST_ERROR}));
        }
        //func();
    } catch (error) {
        yield put(errorAutomobilesList("Ошибка " + error));
        yield put(showNotification({type:'error',message:GET_AUTOMOBILE_LIST_ERROR}));
    }
}


export function* watchAutomobilesListApi() {
    yield takeEvery(actionTypes.AUTOMOBILES_LIST_REQUEST, getAutomobilesList);
}
