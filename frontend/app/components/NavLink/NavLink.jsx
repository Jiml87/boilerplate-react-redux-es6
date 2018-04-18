import React from 'react'
import PropTypes from 'prop-types'
import { NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import './NavLink.scss'

const NavLink = props => (
    <NavItem className={props.to === props.path ? 'active' : ''}>
        <span className="btn btn-link">
            <Link to={props.to} >{props.text}</Link>
        </span>
    </NavItem>
)

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default NavLink
