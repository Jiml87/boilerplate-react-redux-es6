import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Home.scss'

class Home extends Component {

    render() {
        return (
            <div>Home</div>
        )
    }
}


Home.propTypes = {

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
)(Home)
