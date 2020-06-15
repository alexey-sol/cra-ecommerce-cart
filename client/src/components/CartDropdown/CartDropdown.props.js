import PropTypes from "prop-types";

const { array, func, object } = PropTypes;

export const defaultProps = {
    cartItems: [],
    user: null
};

export const propTypes = {
    cartItems: array,
    history: object.isRequired,
    onToggleCartShown: func.isRequired,
    user: object
};
