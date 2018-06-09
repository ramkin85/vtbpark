import {fork, all} from 'redux-saga/effects';

import {watchLoginApi} from './login';
import {watchGetAutomobileApi} from './automobile';

export default function* rootSaga() {
    yield all([
        fork(watchLoginApi),
        fork(watchGetAutomobileApi)
    ]);
}
