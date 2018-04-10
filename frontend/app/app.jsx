import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import { browserHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import 'bootstrap/dist/css/bootstrap.css'

import configureStore from './redux/configureStore'
import Routes from './router'

import './styles/mytheme.scss'
import './styles/global.scss'


export const store = configureStore()
const history = createHistory()

export default class App extends Component {
    state = {
        store: null,
        history: null,
    }

    componentWillMount() {
        this.setState({
            store,
            history: syncHistoryWithStore(history, store),
        })
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Routes history={this.state.history} />
            </Provider>
        )
    }
}

