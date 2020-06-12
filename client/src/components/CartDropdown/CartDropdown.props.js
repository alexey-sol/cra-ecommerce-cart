import PropTypes from "prop-types";

const { array, func, object } = PropTypes;

export const defaultProps = {
    cartItems: []
};

export const propTypes = {
    cartItems: array,
    history: object.isRequired,
    onToggleCartShown: func.isRequired
};
