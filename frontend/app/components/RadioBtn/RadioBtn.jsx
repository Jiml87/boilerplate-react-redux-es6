import React from 'react'
import PropTypes from 'prop-types'

import './RadioBtn.scss'

const RadioBtn = props => ([
    <input
        key={1}
        type="radio"
        id={props.htmlFor}
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
    />,
    <label
        key={2}
        htmlFor={props.htmlFor}
    >
        <div className="radio-emulator" />
        <span>{props.label}</span>
    </label>,
])
RadioBtn.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default RadioBtn
