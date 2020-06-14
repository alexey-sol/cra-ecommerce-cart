import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "components/CheckoutItem";
import StripeCheckoutButton from "components/StripeCheckoutButton";
import { defaultProps, propTypes } from "./Checkout.props";
import { selectCartItems, selectCartTotal } from "redux/cart/cart.selectors";
import styles from "./Checkout.module.scss";

Checkout.defaultProps = defaultProps;
Checkout.propTypes = propTypes;

function Checkout ({ cartItems, total }) {
    const cartItemElements = cartItems.map(cartItem => (
        <CheckoutItem
            cartItem={cartItem}
            key={cartItem.id}
        />
    ));

    return (
        <section className={styles.container}>
            <table>
                <thead className={styles.header}>
                    <tr>
                        <th>
                            Product
                        </th>

                        <th className={styles.descriptionHeader}>
                            Description
                        </th>

                        <th className={styles.quantityHeader}>
                            Quantity
                        </th>

                        <th className={styles.priceHeader}>
                            Price
                        </th>

                        <th>
                            Remove
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {cartItemElements}
                </tbody>
            </table>

            <section className={styles.total}>
                <span>
                    {`TOTAL: $${total}`}
                </span>
            </section>

            <section className={styles.testWarning}>
                * Stripe offers a bunch of test credit cards. You can use this one:
                <br />
                4242 4242 4242 4242 - Exp: 01/99 - CVV: 123
            </section>

            <section className={styles.stripeCheckoutButton}>
                <StripeCheckoutButton price={total} />
            </section>
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const ConnectedCheckout = connect(
    mapStateToProps
)(Checkout);

export default ConnectedCheckout;
