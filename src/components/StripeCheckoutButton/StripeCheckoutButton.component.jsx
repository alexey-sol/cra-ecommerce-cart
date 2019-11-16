import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {propTypes} from "./StripeCheckoutButton.validation";

StripeCheckoutButton.propTypes = propTypes;

function StripeCheckoutButton ({price}) {
  const publishableKey = "pk_test_LZ7qpHgv4YrtQbjvnfcw7v3m00vVaIlifV";
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      description={`Your total is $${price}`}
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

export default StripeCheckoutButton;
