import PropTypes from "prop-types";

const {func, number} = PropTypes;

export const defaultProps = {
  itemCount: 0
};

export const propTypes = {
  itemCount: number,
  toggleCartShown: func
};
