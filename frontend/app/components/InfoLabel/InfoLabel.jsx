import React from 'react'
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'
import {
    Label,
} from 'reactstrap'
import cn from 'classnames'

import './InfoLabel.scss'

const InfoLabel = props => (
    <div
        className={cn(`label-info relative ${props.className}`, {
            is_error: props.errors.length !== 0,
        })}
    >
        <Label>{props.label}</Label>
        {
            props.content &&
            <span className="info-icon">
                <span>i</span>
                <div className={`info-content ${props.infoPosition}`}>
                    <div className="inner">
                        {props.content}
                    </div>
                </div>
            </span>
        }
        {
            props.errors.map((e, index) => (
                <span className="label_error" key={uniqueId()}>{e.error}</span>
            ))
        }
    </div>
)

InfoLabel.propTypes = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string,
    className: PropTypes.string,
    infoPosition: PropTypes.string,
    errors: PropTypes.arrayOf(
        PropTypes.shape({
            error: PropTypes.string.isRequired,
        }),
    ),
}
InfoLabel.defaultProps = {
    className: '',
    infoPosition: 'right',
    content: null,
    errors: [],
}

export default InfoLabel
