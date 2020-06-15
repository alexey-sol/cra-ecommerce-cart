import PropTypes from "prop-types";

const { func, object } = PropTypes;

export const defaultProps = {
    category: {}
};

export const propTypes = {
    category: object,
    onSortItems: func.isRequired
};
