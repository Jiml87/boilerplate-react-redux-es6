import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import Icon from '../Icon/Icon'
import Tooltip from '../Tooltip/Tooltip'
import Preloader from '../Preloader/Preloader'

import './Dropdown.scss'

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
        };
    }
    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }
    hide = () => {
        this.setState({
            dropdownOpen: false,
        });
    }
    
    render() {
        const { select, loading } = this.props
        return (
            <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                className={`dropdown-wrap ${this.props.customClass} ${select ? 'select_wr' : 'not_select_wr'}`}
            >
                <span ref={(r) => { this.dropdownRef = r }} />
                {
                    select && (
                        <DropdownToggle
                            className={cn('select_drop_btn', {
                                'd-flex justify-content-between align-items-center': loading,
                            })}
                            caret
                        >
                            {
                                loading && (
                                    <Preloader color={this.props.preloaderColor} />
                                ) || (
                                    this.props.value === '' && (
                                        <span className="select_placeholder">SELECT</span>
                                    ) || (
                                        <span className="select_value" dangerouslySetInnerHTML={{ __html: this.props.value }} />
                                    )
                                )
                            }
                        </DropdownToggle>
                    ) || (
                        <DropdownToggle
                            size="lg"
                            id="TooltipTarget"
                            className={cn('', {
                                'd-flex justify-content-center': loading,
                            })}
                        >
                            {
                                loading && (
                                    <Preloader color={this.props.preloaderColor} />
                                ) || (
                                    this.props.customIcon && (
                                        this.props.customIcon()
                                    ) || (
                                        <Icon width="24px" height="24px" icid={this.props.icon} />
                                    )
                                )
                            }
                            {this.props.tooltip &&
                            <Tooltip text={this.props.tooltip} tooltipPositon={this.props.tooltipPositon} />
                            }
                        </DropdownToggle>
                    )
                }

                {
                    !this.props.loading && (
                        <DropdownMenu className="DropdownBST">
                            {this.state.dropdownOpen && this.props.content(this)}
                        </DropdownMenu>
                    )
                }
            </ButtonDropdown>
        );
    }
}
Dropdown.propTypes = {
    icon: PropTypes.string,
    value: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipPositon: PropTypes.string,
    customClass: PropTypes.string,
    preloaderColor: PropTypes.string,
    select: PropTypes.bool.isRequired,
    loading: PropTypes.bool,
    content: PropTypes.func.isRequired,
    customIcon: PropTypes.func,
}
Dropdown.defaultProps = {
    value: '',
    icon: null,
    customClass: '',
    customIcon: null,
    tooltip: null,
    tooltipPositon: 'top',
    loading: false,
    preloaderColor: '#000',
}

export default Dropdown
