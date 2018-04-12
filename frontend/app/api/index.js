import axios from 'axios'
import { error as errorAction, removeAll as removeAllNotes } from 'react-notification-system-redux'
import { debounce } from 'lodash'

import { store } from '../index'

const prefix = 'api/'
const baseURL = `/${prefix}`

// let store = null //eslint-disable-line

export const apiMiddleware = reduxStore => next => action => next(action)


const interceptMainConfig = (config) => {
    const { headers } = config
    headers['Content-Type'] = 'application/json;charset=UTF-8'
    // config.withCredentials = true
    config.headers = { ...config.headers } //eslint-disable-line no-param-reassign
    return config;
}

const notAutorize = debounce((response) => {
    store.dispatch(errorAction({
        message: response.data.error.msg,
        position: 'tr',
        autoDismiss: 0,
    }))
    setTimeout(() => { window.location.reload() }, 1500)
}, 1500)

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
                (response) => {
                    if (response.status === 200 && response.data.error && response.data.error.id === 'AccessDeniedException')
                        notAutorize(response)

                    return response
                },
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

export const login = (username, password, rememberMe) => instances.main.post(
    `session/login?login=${username}`,
    password,
)

export const checkSession = () => instances.main.get(
    'session/user',
)

