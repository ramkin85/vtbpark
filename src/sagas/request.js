import axios from "axios";
import {push} from "react-router-redux";
import {HOME_LINK} from "../constants/links";
import {call} from 'redux-saga/effects';

function throwError(msg, err) {
    throw new Error(`${msg}  status: ${err.status} - message: ${err.message}`, err);
}

function getHeaders() {
    return {
        "Authorization": localStorage.getItem("token") || "",
        "Access-Control-Expose-Headers": "Authorization, X-Authorization",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
}

export function* request(opts) {
    let result = {
        "data": null,
        "error": null
    };
    try {
        result = yield call(axios, {
            ...opts,
            "headers": {
                ...getHeaders(),
                ...opts.headers
            }
        });
    } catch (err) {
        const res = err.response || {};

        if (res && res.status) {
            switch (res.status) {
                case 401:
                    push(HOME_LINK);
                    result.error = res;
                    throwError(`Error (401)`, err);
                    break;
                case 403:
                    push(HOME_LINK);
                    result.error = res;
                    throwError(`Error (403)`, err);
                    break;
                default:
                    result.error = res;
                    throwError(`Error (500)`, err);
            }
        } else {
            throwError("Unidentified Error", err);
        }
    }
    return result;
}