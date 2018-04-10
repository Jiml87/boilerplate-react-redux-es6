import React from 'react'
// import PropTypes from 'prop-types'

import './Input.scss'

const Input = props => (
    <input {...props} ref={(node) => { this.refInput = node; }} className="form_input" />
)
// Input.propTypes = {
// }
// Input.defaultProps = {
// }

export default Input
