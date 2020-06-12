import PropTypes from "prop-types";

const { func, object } = PropTypes;

export const propTypes = {
    match: object.isRequired,
    onFetchCollectionsStart: func.isRequired
};
