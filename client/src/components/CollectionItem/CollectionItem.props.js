import PropTypes from "prop-types";

const { func, object } = PropTypes;

export const defaultProps = {
    item: {}
};

export const propTypes = {
    item: object,
    onAddItemToCart: func.isRequired
};
