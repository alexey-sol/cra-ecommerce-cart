import PropTypes from "prop-types";

const { array, number } = PropTypes;

export const defaultProps = {
    cartItems: [],
    total: 0
};

export const propTypes = {
    cartItems: array,
    total: number
};
