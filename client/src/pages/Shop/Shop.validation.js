import PropTypes from "prop-types";

const {func, object} = PropTypes;

export const propTypes = {
  fetchCollectionsStart: func.isRequired,
  match: object.isRequired
};
