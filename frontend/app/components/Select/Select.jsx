import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './Select.scss'

export default class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
        }
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }
    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

Select.propTypes = {
}

Select.defaultProps = {
}
