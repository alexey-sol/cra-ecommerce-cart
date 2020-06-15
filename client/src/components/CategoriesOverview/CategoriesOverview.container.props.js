import PropTypes from "prop-types";

const { array, bool } = PropTypes;

export const defaultProps = {
    categories: [],
    isFetching: false
};

export const propTypes = {
    categories: array,
    isFetching: bool
};
