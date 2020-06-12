import stripe from "stripe";

import stripeConfig from "@config/stripe";

export default async (props) => {
    const { secretKey } = stripeConfig;

    const {
        amount,
        currency = "usd",
        token
    } = props;

    const chargeData = {
        amount,
        currency,
        source: token.id
    };

    return stripe(secretKey)
        .charges
        .create(chargeData);
};
