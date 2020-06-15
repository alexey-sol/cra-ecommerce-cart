import PropTypes from "prop-types";

const { array, func, object } = PropTypes;

export const defaultProps = {
    categories: []
};

export const propTypes = {
    categories: array,
    match: object.isRequired,
    onSortItems: func.isRequired
};
