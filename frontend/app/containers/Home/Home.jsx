import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Home.scss'

class Home extends Component {

    render() {
        return (
            <div id="home_wraper">
                <div className="container">
                    Home
                </div>
            </div>
        )
    }
}


Home.propTypes = {

}


export default connect(
    state => ({
        
    }),
    dispatch => ({
        
    }),
)(Home)
