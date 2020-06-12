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
            <section className={styles.header}>
                <div className={styles.headerBlock}>
                    <span>
                        Product
                    </span>
                </div>

                <div className={styles.headerBlock}>
                    <span>
                        Description
                    </span>
                </div>

                <div className={styles.headerBlock}>
                    <span>
                        Quantity
                    </span>
                </div>

                <div className={styles.headerBlock}>
                    <span>
                        Price
                    </span>
                </div>

                <div className={styles.headerBlock}>
                    <span>
                        Remove
                    </span>
                </div>
            </section>

            {cartItemElements}

            <section className={styles.total}>
                <span>
                    {`TOTAL: $${total}`}
                </span>
            </section>

            <section className={styles.testWarning}>
                * Please use the following test credit card for payments:
                <br />
                4242 4242 4242 4242 - Exp: 01/30 - CVV: 123
            </section>

            <section className={styles.stripeCheckoutButton}>
                <StripeCheckoutButton price={total} />
            </section>
        </section>
    ); // TODO: fix all this hardcoded stuff
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const ConnectedCheckout = connect(
    mapStateToProps
)(Checkout);

export default ConnectedCheckout;
