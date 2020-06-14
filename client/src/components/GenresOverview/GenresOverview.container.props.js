import PropTypes from "prop-types";

const { array, bool } = PropTypes;

export const defaultProps = {
    genres: [],
    isFetching: false
};

export const propTypes = {
    genres: array,
    isFetching: bool
};
