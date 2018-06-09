import {fork, all} from 'redux-saga/effects';

import {watchLoginApi} from './login';
import {watchGetAutomobileApi} from './automobile';
import {watchAutomobilesListApi} from "./automobilesList";

export default function* rootSaga() {
    yield all([
        fork(watchLoginApi),
        fork(watchGetAutomobileApi),
        fork(watchAutomobilesListApi)
    ]);
}
