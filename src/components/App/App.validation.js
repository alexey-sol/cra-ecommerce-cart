import PropTypes from "prop-types";

const {func, object} = PropTypes;

export const propTypes = {
  setUser: func.isRequired,
  user: object
};
