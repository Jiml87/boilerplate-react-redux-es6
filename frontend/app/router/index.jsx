import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { uniqueId } from 'lodash'
import { Router, Route } from 'react-router'

import Root from '../containers/Root/Root'
import Home from '../containers/Home/Home'

const Routes = props => (
    <div style={{ height: '100%', width: '100%' }}>
        <Router history={props.history} key={uniqueId()}>
            <Route component={Root} >
                <Route path="/" component={Home} />
            </Route>
        </Router>
    </div>
)

Routes.propTypes = {
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default connect(
    state => ({
        
    }),
    dispatch => ({

    }),
)(Routes)
