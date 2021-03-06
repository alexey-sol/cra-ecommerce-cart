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
    onPayStart: func.isRequired,
    onResetPaymentState: func.isRequired,
    price: number.isRequired
};
