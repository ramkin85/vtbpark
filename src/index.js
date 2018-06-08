// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/store'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/app'

import './index.css'


injectTapEventPlugin();

const target = document.querySelector('#root');

    render(

            <Provider store={store}>
                <ConnectedRouter history={history}>
                        <App/>
                </ConnectedRouter>
            </Provider>,
    target
);

