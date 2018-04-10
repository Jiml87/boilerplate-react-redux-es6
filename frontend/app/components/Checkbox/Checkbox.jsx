import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

import './Checkbox.scss'

const Checkbox = props => ([
    <input
        key={1}
        type="checkbox"
        id={props.htmlFor}
        checked={props.checked}
        onChange={() => props.onChange()}
    />,
    <label
        key={2}
        htmlFor={props.htmlFor}
    >
        <div className="checkbox-emulator">
            <Icon width="14px" height="14px" icid="ic_checkbox" />
        </div>
        <span>{props.label}</span>
    </label>,
])
Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
}

Checkbox.defaultProps = {
    onChange: () => {},
    htmlFor: '',
}

export default Checkbox
