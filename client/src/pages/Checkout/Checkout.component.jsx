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
                <div>
                    * Stripe offers a bunch of test credit cards. You may use these
                    (with Exp: 01/30 and CVV: 123):
                </div>

                <ul className={styles.testCardsList}>
                    <li>
                        4242 4242 4242 4242 - success
                    </li>

                    <li>
                        4000 0000 0000 0002 - card declined
                    </li>
                </ul>
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
