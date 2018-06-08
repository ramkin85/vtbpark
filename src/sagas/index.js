import {fork, all} from 'redux-saga/effects';

import {watchLoginApi} from './login';

export default function* rootSaga() {
    yield all([
        fork(watchLoginApi)
    ]);
}
