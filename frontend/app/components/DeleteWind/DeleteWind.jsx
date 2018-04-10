import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { debounce } from 'lodash'

import Dropdown from '../Dropdown/Dropdown'
import Icon from '../Icon/Icon'

import './DeleteWind.scss'

const widowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth

class DeleteWind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            positionAnchor: 'top-left', // 'top-right'
        }
        this.onSetWind = debounce(this.setPositionWind, 50)
    }
    componentDidMount() {
        if (this.props.posAnchor === 'top-left')
            setTimeout(() => this.onSetWind())
    }
    componentDidUpdate() {
        if (this.props.posAnchor === 'top-left')
            setTimeout(() => this.onSetWind())
    }
    setPositionWind = () => {
        if (!this.dropdownElem)
            return

        const posX = this.dropdownElem.dropdownRef.getBoundingClientRect().left
        const width = widowWidth - posX
        if (width < 420 && this.state.positionAnchor === 'top-left') {
            this.setState({
                positionAnchor: 'top-right',
            })
        } else if (width > 419 && this.state.positionAnchor === 'top-right') {
            this.setState({
                positionAnchor: 'top-left',
            })
        }
    }
    renderPopUp = that => (
        <div className="del_content_wr">
            <div className="d-flex justify-content-start">
                <Icon width="48" height="42" icid="ic_warning" />
                <div style={{ marginLeft: '12px' }}>
                    <h3>{this.props.title}</h3>
                    <div className="dropDownSubTitle" dangerouslySetInnerHTML={{ __html: this.props.subtitle }} />
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <Button
                    color="primary"
                    onClick={(e) => {
                        this.props.onRemove(that.hide)
                    }}
                >
                    Delete
                </Button>
                <Button
                    className="btn_cancel"
                    onClick={() => {
                        that.hide()
                    }}
                >
                    Cancel
                </Button>
            </div>
            <div className="curret" />
        </div>
    )
    render() {
        const pos = this.props.posAnchor === 'top-left' || this.props.posAnchor === 'top-right' ? this.state.positionAnchor : this.props.posAnchor
        return (
            <Dropdown
                select={false}
                icon="ic_download"
                content={this.renderPopUp}
                customClass={`delete_window ${this.props.customClass} ${pos}`}
                customIcon={() => (
                    <svg viewBox="-2 -8 30 27" className="ic_delete">
                        <path className="cap" d="M19,4 h -3.5 l -1,-1 h -5 l -1,1 H 5 v 2 h 14 z" />
                        <path d="m 6,19 c 0,1.1 0.9,2 2,2 h 8 c 1.1,0 2,-0.9 2,-2 V 7 H 6 Z" />
                    </svg >
                )}
                ref={(link) => { this.dropdownElem = link }}
                tooltip="Delete"
            />
        )
    }
}
DeleteWind.propTypes = {
    onRemove: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    customClass: PropTypes.string,
    posAnchor: PropTypes.string,
}
DeleteWind.defaultProps = {
    customClass: '',
    subtitle: '',
    posAnchor: 'bottom-right',
}

export default DeleteWind
