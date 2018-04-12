import { createAction, handleActions } from 'redux-actions'
import { put, throttle } from 'redux-saga/effects'
// import { browserHistory } from 'react-router'
// import { error as errorAction, removeAll as removeAllNotes } from 'react-notification-system-redux'

// import { RemoteData } from '../types'
// import * as api from '../../api'

export const initialState = {
    isLogin: false,
    username: '',
    password: '',
    user: {},
    loginRequestInProgress: false,
    // sessionRequestProgress: RemoteData.NotAsked,
    logoutRequestInProgress: false,
    loginMessage: '',
    restError: '',
}

export const usernameChanged = createAction('USERNAME_CHANGED', username => ({ username }))
export const passwordChanged = createAction('PASSWORD_CHANGED', password => ({ password }))

export const clearErrorMessages = createAction('CLEAR_ERROR_MESSAGES')

const reducer = handleActions({
    [usernameChanged]: (state, action) => ({ ...state, username: action.payload.username, loginMessage: '' }),
    [passwordChanged]: (state, action) => ({ ...state, password: action.payload.password, loginMessage: '' }),
    [clearErrorMessages]: (state, action) => ({
        ...state,
        loginMessage: '',
        restError: '',
    }),
}, initialState)

export default reducer

function* clearError(action) {
    // const isTyping = [usernameChanged, passwordChanged].find(func => func.toString() === action.type)
    // if (isTyping && (
    //     RemoteData.Failed.is(yield select(selectors.loginMessage))
    // ))
    yield put(clearErrorMessages())
}

export function* authSaga() {
    // yield throttle(500, '*', clearError)
    yield console.log('auth')
}
