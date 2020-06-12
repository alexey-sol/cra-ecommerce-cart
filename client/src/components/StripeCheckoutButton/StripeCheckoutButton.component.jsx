import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    selectCharge,
    selectError
} from "redux/payment/payment.selectors";

import { defaultProps, propTypes } from "./StripeCheckoutButton.props";
import { payStart } from "redux/payment/payment.actions";

StripeCheckoutButton.defaultProps = defaultProps;
StripeCheckoutButton.propTypes = propTypes;

function StripeCheckoutButton ({
    charge,
    error,
    onPayStart,
    price
}) {
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    const priceForStripe = price * 100;

    const onToken = (token) => onPayStart(priceForStripe, token);

    useEffect(() => {
        if (charge) {
            console.log("Payment successful"); // TODO: popup
        }

        if (error) {
            console.log("Payment error: ", error);

            console.error(
                "There was an issue with your payment. Please make sure you use " +
                "the provided credit card."
            );
        }
    }, [charge, error]);

    return (
        <StripeCheckout
            amount={priceForStripe}
            billingAddress
            description={`Your total is $${price}`}
            disabled={!priceForStripe}
            label="Pay Now"
            name="CRA E-commerce Cart"
            panelLabel="Pay Now"
            shippingAddress
            stripeKey={publishableKey}
            token={onToken}
        />
    );
}

const mapStateToProps = createStructuredSelector({
    charge: selectCharge,
    error: selectError
});

const mapDispatchToProps = (dispatch) => ({
    onPayStart: (amount, token) => dispatch(payStart({
        amount,
        token
    }))
});

const ConnectedStripeCheckoutButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(StripeCheckoutButton);

export default ConnectedStripeCheckoutButton;
