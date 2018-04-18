import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import rootReducer, { rootSaga } from './modules'
// import { apiMiddleware } from '../api'

const sagaMiddleware = createSagaMiddleware()

export const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware, historyMiddleware)),
    )

    sagaMiddleware.run(rootSaga, store.dispatch)

    if (module.hot) {
        module.hot.accept('./modules/index', () => {
            // eslint-disable-next-line
            const newReducer = require('./modules/index').default;
            store.replaceReducer(newReducer);
        });
    }

    return store
}
