import PropTypes from "prop-types";

const {arrayOf, bool, node, oneOfType, string} = PropTypes;

export const defaultProps = {
  children: null,
  isGoogleSignIn: false,
  type: "submit"
};

export const propTypes = {
  children: oneOfType([
    arrayOf(node),
    node
  ]),

  isGoogleSignIn: bool,

  type: string
};
