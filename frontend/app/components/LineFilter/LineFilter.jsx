import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'reactstrap'
import { ALL, WORK, WARNING, OFFLINE } from '../../constants'

import Icon from '../../components/Icon/Icon'

import './LineFilter.scss'


const LineFilter = props => (
    <div className="manage_filter p-h-15">
        <div className="label_wr">
            <span>Operation mode types</span>
        </div>
        <ButtonGroup className="btn_filter_wr">
            <Button
                className={props.filterAction === ALL ? 'actived' : ''}
                onClick={() => { props.onSetActive(ALL) }}
            >
                <span>{ALL}</span>&nbsp;<span>{props.countStatus.all}</span>
            </Button>{' '}
            <Button
                className={props.filterAction === WORK ? 'actived' : ''}
                onClick={() => { props.onSetActive(WORK) }}
            >
                <span className="indicator bg_green" />
                <span>{WORK}</span>&nbsp;<span>{props.countStatus.work}</span>
            </Button>{' '}
            <Button
                className={props.filterAction === WARNING ? 'actived' : ''}
                onClick={() => { props.onSetActive(WARNING) }}
            >
                <span className="indicator bg_yel" />
                <span>{WARNING}</span>&nbsp;<span>{props.countStatus.maintenance}</span>
            </Button>{' '}
            <Button
                className={props.filterAction === OFFLINE ? 'actived' : ''}
                onClick={() => { props.onSetActive(OFFLINE) }}
            >
                <span className="indicator bg_red" />
                <span>{OFFLINE}</span>&nbsp;<span>{props.countStatus.offline}</span>
            </Button>{' '}
        </ButtonGroup>
    </div>
    
)
LineFilter.propTypes = {
    filterAction: PropTypes.string,
    onSetActive: PropTypes.func.isRequired,
    countStatus: PropTypes.shape({
        all: PropTypes.number.isRequired,
        maintenance: PropTypes.number.isRequired,
        work: PropTypes.number.isRequired,
        offline: PropTypes.number.isRequired,
    }).isRequired,
}
LineFilter.defaultProps = {
    filterAction: 'ALL', //ALL, WORK, WARNING, OFFLINE
}

export default LineFilter
