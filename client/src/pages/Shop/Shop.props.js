import PropTypes from "prop-types";

const { func, object } = PropTypes;

export const propTypes = {
    match: object.isRequired,
    onFetchGenresStart: func.isRequired
};
