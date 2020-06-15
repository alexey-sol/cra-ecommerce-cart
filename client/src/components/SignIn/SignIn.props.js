import PropTypes from "prop-types";

const { bool, func, object } = PropTypes;

export const defaultProps = {
    error: null,
    isPending: false
};

export const propTypes = {
    error: object,
    isPending: bool,
    onEmailSignInStart: func.isRequired,
    onGoogleSignInStart: func.isRequired,
    onResetAuthState: func.isRequired
};
