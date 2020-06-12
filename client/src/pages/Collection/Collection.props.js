import PropTypes from "prop-types";

const { bool, object } = PropTypes;

export const defaultProps = {
    collection: {},
    isLoading: false
};

export const propTypes = {
    collection: object,
    isLoading: bool
};
