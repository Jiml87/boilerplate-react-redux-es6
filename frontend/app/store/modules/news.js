import { createAction, handleActions } from 'redux-actions'
import { delay } from 'redux-saga'
import { put, takeLatest, call, select } from 'redux-saga/effects'

import { RemoteData } from '../types'
import * as api from '../../api'

export const initialState = {
    newsData: [],
    statusNewsData: RemoteData.NotAsked,
    option: 'home',
}


export const getNews = createAction('GET_NEWS')
export const setNews = createAction('SET_NEWS', data => ({ data }))
export const cleanStateNews = createAction('CLEAN_STATE_NEWS')

const reducer = handleActions({
    [getNews]: (state, action) => ({
        ...state,
        statusNewsData: RemoteData.Loading,
    }),
    [setNews]: (state, action) => ({
        ...state,
        newsData: action.payload.data,
        statusNewsData: RemoteData.Succeeded,
    }),
    [cleanStateNews]: (state, action) => ({
        ...state,
        newsData: [],
        statusNewsData: RemoteData.NotAsked,
    }),
}, initialState)

export default reducer

function* fetchNews() {
    try {
        const { option } = (yield select()).news
        yield call(delay, 1000)
        const resp = yield call(api.getNews, option)
        if (resp.statusText === 'OK')
            yield put(setNews(resp.data.results))
    } catch (error) {
        console.log(error)
    }
}

export function* newsSaga() {
    yield takeLatest(getNews, fetchNews)
}
