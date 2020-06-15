import stripe from "stripe";

export default async (props) => {
    const stripeConfig = (await import("@config/stripe")).default;
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
