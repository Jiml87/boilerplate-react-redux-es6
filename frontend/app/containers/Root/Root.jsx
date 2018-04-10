import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Notice from '../Notice/Notice'
import Header from '../Header/Header'


class Root extends Component {
    render() {
        return (
            <div className="app-wrap" >
                <Header />
                {this.props.children}
                <Notice />
            </div>
        )
    }
}

Root.propTypes = {
    children: PropTypes.object.isRequired, // eslint-disable-line
}

export default connect(
    state => ({
        
    }),
    dispatch => ({
        // initialRequests() {
        //     dispatch(initialRequestedData())
        // },
        // login() {
        //     dispatch(loginRequested())
        // },
    }),
)(Root)
