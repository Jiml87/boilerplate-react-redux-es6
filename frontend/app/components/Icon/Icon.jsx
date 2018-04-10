import React from 'react'
import PropTypes from 'prop-types'

import './Icon.scss'

const Icon = props => (
    <svg {...props} className={`svg-icon ${props.className}`}>
        <use xlinkHref={`#${props.icid}`} />
    </svg >
)

Icon.propTypes = {
    className: PropTypes.string,
    icid: PropTypes.string,
}
Icon.defaultProps = {
    className: '',
    icid: '',
}

export default Icon
