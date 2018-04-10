import React from 'react';
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'
import { Button } from 'reactstrap'

import Icon from '../Icon/Icon'

import './BtnBack.scss'

const BtnBack = props => (
    <Button
        color="secondary"
        className={`${props.color} btn-back d-flex align-items-center`}
        onClick={() => props.to()}
    >
        <Icon width="24px" height="24px" icid="ic_arrow_left" />
        <span>{props.text}</span>
    </Button>
)

BtnBack.propTypes = {
    to: PropTypes.func,
    color: PropTypes.string,
    text: PropTypes.string,
}

BtnBack.defaultProps = {
    to: () => browserHistory.go(-1),
    color: 'black',
    text: 'Back',
}


export default BtnBack
