import React from 'react'
import PropTypes from 'prop-types'

import './Preloader.scss'

const Preloader = props => (
    <div className="preloader-wrap">
        <div className={`preloader clearfix ${props.size}`}>
            <div className="point-1-animation" style={{ backgroundColor: props.color }} />
            <div className="point-2-animation" style={{ backgroundColor: props.color }} />
            <div className="point-3-animation" style={{ backgroundColor: props.color }} />
            <div className="point-4-animation" style={{ backgroundColor: props.color }} />
            <div className="point-5-animation" style={{ backgroundColor: props.color }} />
            <div className="point-6-animation" style={{ backgroundColor: props.color }} />
        </div>
    </div>
)

Preloader.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
}

Preloader.defaultProps = {
    color: '#000',
    size: 'md',
}

export default Preloader
