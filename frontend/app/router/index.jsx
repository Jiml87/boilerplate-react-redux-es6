import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../containers/Home/Home'
import Notice from '../containers/Notice/Notice'
import Header from '../containers/Header/Header'
import News from '../containers/News/News'

const Routes = props => (
    <div className="app-wrap" >
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route component={Home} />
        </Switch>
        <Notice />
    </div>
)

export default Routes
