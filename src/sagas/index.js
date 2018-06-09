import {fork, all} from 'redux-saga/effects';

import {watchLoginApi} from './login';
import {watchGetAutomobileApi} from './automobile';
import {watchLogoutApi} from "./logout";

export default function* rootSaga() {
    yield all([
        fork(watchLoginApi),
        fork(watchLogoutApi),
        fork(watchGetAutomobileApi)
    ]);
}
