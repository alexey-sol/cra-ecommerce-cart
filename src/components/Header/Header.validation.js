import PropTypes from "prop-types";

const {bool, func, object} = PropTypes;

export const propTypes = {
  cartIsShown: bool,
  signOutStart: func.isRequired,
  user: object
};
