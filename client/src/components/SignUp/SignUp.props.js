import PropTypes from "prop-types";

const { bool, func } = PropTypes;

export const defaultProps = {
    isPending: false
};

export const propTypes = {
    isPending: bool,
    onSignUpStart: func.isRequired
};
