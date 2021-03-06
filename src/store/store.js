import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducer from '../reducers/index';
import createSagaMiddleware from "redux-saga";
import sagaRoot from '../sagas';
import {createLogger} from 'redux-logger';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    "level": "log",
    "collapsed": true
});

const middleware = [
    sagaMiddleware,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
    /** @namespace window.__REDUX_DEVTOOLS_EXTENSION__ */
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware, logger),
    ...enhancers
);

const store = createStore(
    reducer,
    initialState,
    composedEnhancers
);

sagaMiddleware.run(sagaRoot);

export default store



