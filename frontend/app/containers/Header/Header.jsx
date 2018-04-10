import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

import './Header.scss'

class Header extends Component {
    
    render() {
        return (
            <header className="page-header d-flex justify-content-between">
                <a href="/" className="logo d-flex justify-content-center align-items-center">
                    Logo
                </a>
                <Nav>
                    <NavItem>
                        <span className="btn btn-link">
                            <Link to="/manager" activeClassName="active">Manager</Link>
                        </span>
                    </NavItem>
                </Nav>
                
            </header>
        )
    }
}


Header.propTypes = {
    
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
)(Header)
