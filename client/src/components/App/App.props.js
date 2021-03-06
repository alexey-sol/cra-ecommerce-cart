import PropTypes from "prop-types";

const { func, object } = PropTypes;

export const defaultProps = {
    user: {}
};

export const propTypes = {
    onCheckSession: func.isRequired,
    user: object
};
