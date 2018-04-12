import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'

import Home from '../containers/Home/Home'
import Notice from '../containers/Notice/Notice'
import Header from '../containers/Header/Header'
import Whether from '../containers/Whether/Whether'

const Routes = props => (
    <div className="app-wrap" >
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/whether" component={Whether} />
            <Route component={Home} />
        </Switch>
        <Notice />
    </div>
)

export default Routes
