import PropTypes from "prop-types";

const {
    bool,
    func,
    number,
    object
} = PropTypes;

export const defaultProps = {
    charge: null,
    error: null,
    isPending: false
};

export const propTypes = {
    charge: object,
    error: object,
    isPending: bool,
    onPayReset: func.isRequired,
    onPayStart: func.isRequired,
    price: number.isRequired
};
