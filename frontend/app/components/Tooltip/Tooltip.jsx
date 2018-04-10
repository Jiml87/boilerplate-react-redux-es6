import React from 'react'
import PropTypes from 'prop-types'

import './Tooltip.scss'

const Tooltip = props => (
    <div className={`tooltip_wraper ${props.position} ${props.customClass}`}>
        <div className="tooltip_content">
            {props.text}
        </div>
    </div>
)

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.string,
    customClass: PropTypes.string,
}
Tooltip.defaultProps = {
    position: 'top',
    customClass: '',
}

export default Tooltip
