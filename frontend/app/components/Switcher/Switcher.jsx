import React from 'react'
import PropTypes from 'prop-types'

import './Switcher.scss'

const Switcher = props => ([
    <input
        key={1}
        type="checkbox"
        id={props.htmlFor}
        className="switcher"
        checked={props.checked}
        onChange={() => props.onChange()}
    />,
    <label
        key={2}
        htmlFor={props.htmlFor}
    >
        <div className="checkbox-emulator d-flex">
            <div className="left-btn" />
            <div className="right-btn" />
        </div>
        <span>{props.label}</span>
    </label>,
])
Switcher.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
}

Switcher.defaultProps = {
    onChange: () => {},
    htmlFor: '',
}

export default Switcher
