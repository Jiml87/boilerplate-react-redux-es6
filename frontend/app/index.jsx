import 'react-hot-loader/patch';
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
// import createHistory from 'history/createBrowserHistory'

import 'bootstrap/dist/css/bootstrap.css'

import configureStore, { history } from './store/configureStore'
import Routes from './router'

// import App from './app'

import './styles/mytheme.scss'
import './styles/global.scss'

export const store = configureStore()
// const history = createHistory()

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Component />
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app'),
    );
}

render(Routes)

if (module.hot) {
    module.hot.accept('./router', () => {
        render(Routes)
    });
}

export default render
