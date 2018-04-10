
import PropTypes from 'prop-types';

export const errorsShape = PropTypes.arrayOf( //eslint-disable-line
    PropTypes.shape({ text: PropTypes.string.isRequired }),
)

