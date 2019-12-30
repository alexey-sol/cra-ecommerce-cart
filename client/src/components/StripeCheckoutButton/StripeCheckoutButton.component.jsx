import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {propTypes} from "./StripeCheckoutButton.validation";
import axios from "axios";

StripeCheckoutButton.propTypes = propTypes;

function StripeCheckoutButton ({price}) {
  const publishableKey = "pk_test_LZ7qpHgv4YrtQbjvnfcw7v3m00vVaIlifV";
  const priceForStripe = price * 100;

  const onToken = async (token) => {
    const data = {
      amount: priceForStripe,
      token
    };

    try {
      const response = await axios({
        data,
        method: "post",
        url: "payment"
      });

      console.log(response);
      alert("Payment successful");
    } catch (error) {
      console.log("Payment error: ", error);

      alert(
        "There was an issue with your payment. Please make sure you use " +
        "the provided credit card."
      );
    }
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
