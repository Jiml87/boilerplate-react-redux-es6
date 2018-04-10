import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.scss'

import progressGIF from '../../assets/images/preloader.gif'

export default class Button extends Component {
    render() {
        return (
            <button
                type={this.props.type}
                className={`zz-btn ${this.props.className} ${this.props.size}`}
                onClick={this.props.onClick}
            >
                {this.props.progress && <img src={progressGIF} alt="*" />}
                {this.props.val}
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string,
    val: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    progress: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.string,
}

Button.defaultProps = {
    type: 'button',
    progress: false,
    className: '',
    size: 'md',

    onClick: () => {},
}
