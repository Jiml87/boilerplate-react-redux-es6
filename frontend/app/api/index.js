import axios from 'axios'
import { error as errorAction, removeAll as removeAllNotes } from 'react-notification-system-redux'
import { debounce } from 'lodash'

import { store } from '../index'

const baseURL = ''
const APIkeyNYT = 'b71b652710f04038a72a5784df8d99c5'

// let store = null //eslint-disable-line

export const apiMiddleware = reduxStore => next => action => next(action)


const interceptMainConfig = (config) => {
    const { headers } = config
    headers['Content-Type'] = 'application/json;charset=UTF-8'
    // config.withCredentials = true
    config.headers = { ...config.headers } //eslint-disable-line no-param-reassign
    return config;
}

const crashServer = debounce((msg) => {
    store.dispatch(removeAllNotes());
    store.dispatch(errorAction({
        message: msg,
        position: 'tr',
        autoDismiss: 0,
    }))
}, 1500)

const getAxiosConfig = () => ({ baseURL })

const instances = {
    _main: null,

    get main() {
        if (!this._main) {
            this._main = axios.create(getAxiosConfig())

            this._main.interceptors.request.use(
                interceptMainConfig,
                Promise.reject,
            )

            this._main.interceptors.response.use(
                response => response,
                (error) => {
                    if (error.response)
                        crashServer(`Request failed with status code ${error.response.status}`)
                    else
                        crashServer(error.message)

                    return Promise.reject(error);
                },
            )
        }
        return this._main
    },
}

// export const getNews = option => instances.main.get(
//     `url`,
// )

export const getNews = option => instances.main.get(
    `https://api.nytimes.com/svc/topstories/v2/${option}.json?api-key=${APIkeyNYT}`,
)

