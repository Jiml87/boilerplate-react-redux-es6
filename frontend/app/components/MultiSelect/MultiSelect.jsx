import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './MultiSelect.scss'

export default class MultiSelect extends Component {
    state = {
        open: false,
    }

    toggle = (e) => {
        if (!this.state.open)
            document.addEventListener('click', this.close, true)

        this.setState({
            open: !this.state.open,
        });
    }

    close = (e) => {
        if (e.target.closest('.select-list'))
            return true

        document.removeEventListener('click', this.close, true)
        this.setState({ open: false })
        return true
    }

    render() {
        return (
            <div className="multi-select">
                <button type="button" onClick={e => this.toggle(e)}>
                    <div className="value">
                        {this.props.value}
                    </div>
                    <div className="caret" />
                </button>
                <div className={`select-list ${this.state.open ? 'open' : ''}`}>
                    <ul className="list">
                        {this.props.initialItem}
                        {this.props.renderItems}
                    </ul>
                </div>
            </div>
        );
    }
}

MultiSelect.propTypes = {
    value: PropTypes.string.isRequired,
    renderItems: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    initialItem: PropTypes.object, //fix-me
}
