import PropTypes from "prop-types";

const {func, object} = PropTypes;

export const defaultProps = {
  cartItem: {}
};

export const propTypes = {
  addItem: func.isRequired,
  cartItem: object,
  clearItem: func.isRequired,
  removeItem: func.isRequired
};
