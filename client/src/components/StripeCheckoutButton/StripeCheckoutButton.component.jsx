import React, {useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
import {selectCharge, selectError}
  from "redux/payment/payment.selectors";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {payStart} from "redux/payment/payment.actions";
import {defaultProps, propTypes} from "./StripeCheckoutButton.validation";

StripeCheckoutButton.defaultProps = defaultProps;
StripeCheckoutButton.propTypes = propTypes;

function StripeCheckoutButton ({charge, payStart, error, price}) {
  const publishableKey = "pk_test_LZ7qpHgv4YrtQbjvnfcw7v3m00vVaIlifV";
  const priceForStripe = price * 100;

  const onToken = (token) => payStart(priceForStripe, token);

  useEffect(() => {
    if (charge) {
      alert("Payment successful");
    }

    if (error) {
      console.log("Payment error: ", error);

      alert(
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
      image="https://svgshare.com/i/CUz.svg"
      label="Pay Now"
      name="React Clothing Store"
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
  payStart: (amount, token) => dispatch(payStart({
    amount,
    token
  }))
});

const ConnectedStripeCheckoutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);

export default ConnectedStripeCheckoutButton;
