
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Whether.scss'

class Whether extends Component {
    render() {
        return (
            <div>Whether</div>
        )
    }
}


Whether.propTypes = {

}

export default connect(
    state => ({
        // user: takeCurrentUser(state),
    }),
    dispatch => ({
        // logout() {
        //     browserHistory.push('/login')
        //     dispatch(logoutRequested())
        // },
    }),
)(Whether)
