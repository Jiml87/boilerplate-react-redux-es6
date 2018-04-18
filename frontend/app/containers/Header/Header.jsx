import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Nav } from 'reactstrap'

import NavLink from '../../components/NavLink/NavLink'

import './Header.scss'

const Header = props => (
    <header className="page-header">
        <div className="container d-flex justify-content-between">
            <Link to="/" className="logo d-flex justify-content-center align-items-center">
                Logo
            </Link>
            <Nav>
                <NavLink to="/" path={props.match} text="Home" />
                <NavLink to="/news" path={props.match} text="News" />
            </Nav>
        </div>
    </header>
)

Header.propTypes = {
    match: PropTypes.string.isRequired,
}

export default connect(
    state => ({
        match: state.routing ? state.routing.location.pathname : '',
    }),
    dispatch => ({

    }),
)(Header)
