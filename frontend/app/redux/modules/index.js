import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import { routerReducer } from 'react-router-redux'
import { reducer as notifications } from 'react-notification-system-redux'

import auth, { authSaga } from './auth'


const appReducer = combineReducers({
    auth,
    notifications, // global
    routing: routerReducer, // routing
})

const rootReducer = (state, action) => appReducer(state, action)

export default rootReducer

export function* rootSaga(dispatch) {
    yield all([
        authSaga(),
    ])
}
