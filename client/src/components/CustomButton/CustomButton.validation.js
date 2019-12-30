import PropTypes from "prop-types";

const {arrayOf, bool, node, oneOfType, string} = PropTypes;

export const defaultProps = {
  children: null,
  className: "",
  isGoogleSignIn: false,
  isInverted: false,
  type: "submit"
};

export const propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ]),

  className: string,

  isGoogleSignIn: bool,

  isInverted: bool,

  type: string
};
