import PropTypes from "prop-types";

const { array, bool } = PropTypes;

export const defaultProps = {
    categories: [],
    isPending: false
};

export const propTypes = {
    categories: array,
    isPending: bool
};
