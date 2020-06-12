import PropTypes from "prop-types";

const { func } = PropTypes;

export const propTypes = {
    onEmailSignInStart: func.isRequired,
    onGoogleSignInStart: func.isRequired
};
