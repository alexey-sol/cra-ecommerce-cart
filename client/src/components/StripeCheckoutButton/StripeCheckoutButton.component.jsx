import React, { Fragment, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Popup from "components/Popup";

import {
    selectCharge,
    selectError,
    selectIsPaymentPending
} from "redux/payment/payment.selectors";

import { defaultProps, propTypes } from "./StripeCheckoutButton.props";
import { payReset, payStart } from "redux/payment/payment.actions";

StripeCheckoutButton.defaultProps = defaultProps;
StripeCheckoutButton.propTypes = propTypes;

function StripeCheckoutButton ({
    charge,
    error,
    isPending,
    onPayReset,
    onPayStart,
    price
}) {
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    const priceForStripe = price * 100;
    const onToken = (token) => onPayStart(priceForStripe, token);

    useEffect(() => {
        return () => {
            onPayReset();
        };
    }, [onPayReset]);

    let popupText = "";
    let popupTheme = "";

    if (charge) {
        popupText = "Payment successful";
        popupTheme = "success";
    } else if (error) {
        popupText = error.message;
        popupTheme = "error";
    }

    const buttonIsDisabled = isPending || !priceForStripe;

    return (
        <Fragment>
            <StripeCheckout
                amount={priceForStripe}
                billingAddress
                description={`Your total is $${price}`}
                disabled={buttonIsDisabled}
                label="Buy the stuff"
                name="CRA E-commerce Cart"
                panelLabel="Buy the stuff"
                shippingAddress
                stripeKey={publishableKey}
                token={onToken}
            />

            {Boolean(popupText) && (
                <Popup
                    onClose={onPayReset}
                    text={popupText}
                    theme={popupTheme}
                />
            )}
        </Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    charge: selectCharge,
    error: selectError,
    isPending: selectIsPaymentPending
});

const mapDispatchToProps = (dispatch) => ({
    onPayReset: () => dispatch(payReset()),
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
