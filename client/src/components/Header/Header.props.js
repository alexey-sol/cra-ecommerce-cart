import PropTypes from "prop-types";

const { bool, func, object } = PropTypes;

export const propTypes = {
    cartIsShown: bool,
    onSignOutStart: func.isRequired,
    user: object
};
