import PropTypes from "prop-types";

const { func, object } = PropTypes;

export const defaultProps = {
    cartItem: {}
};

export const propTypes = {
    cartItem: object,
    onAddItem: func.isRequired,
    onClearItem: func.isRequired,
    onRemoveItem: func.isRequired
};
