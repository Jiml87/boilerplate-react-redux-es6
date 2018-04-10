import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'

import './Accordion.scss'

export default class Accordion extends Component {
    state = {
        open: true,
    }

    toggle = () => this.setState({ open: !this.state.open })

    render() {
        return (
            <div className={`accordion ${this.state.open ? 'open' : ''} ${this.props.className ? this.props.className : ''}`}>
                <header className="head">
                    <div
                        className="carret"
                        onClick={this.toggle}
                    >
                        {
                            this.state.open && (
                                <Icon icid="ic_arrow_left" width="25px" height="25px" className="bottom" />
                            ) || (
                                <Icon icid="ic_arrow_left" width="25px" height="25px" className="top" />
                            )
                        }
                    </div>
                    <h3>{this.props.name}</h3>
                </header>
                <div className="body">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

Accordion.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    content: PropTypes.any.isRequired, //fix-me
}

Accordion.defaultProps = {
    className: '',
}
