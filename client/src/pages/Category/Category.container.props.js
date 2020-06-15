import PropTypes from "prop-types";

const { array, object } = PropTypes;

export const defaultProps = {
    categories: []
};

export const propTypes = {
    categories: array,
    match: object.isRequired
};
