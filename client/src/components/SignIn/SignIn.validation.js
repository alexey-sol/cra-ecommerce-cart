import PropTypes from "prop-types";

const {func} = PropTypes;

export const propTypes = {
  emailSignInStart: func.isRequired,
  googleSignInStart: func.isRequired
};
