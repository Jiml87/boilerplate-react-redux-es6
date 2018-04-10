import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Notifications from 'react-notification-system-redux'

import './Notice.scss'

const Notice = ({ notifications }) => (
    <Notifications
        notifications={notifications}
    />
);

Notice.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            autoDismiss: PropTypes.number,
            level: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            position: PropTypes.string,
            title: PropTypes.string,
            uid: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default connect(
    state => ({ notifications: state.notifications }),
)(Notice)
