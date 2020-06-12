import React from "react";
import { connect } from "react-redux";

import {
    addItemToCart,
    clearItemFromCart,
    removeItem
} from "redux/cart/cart.actions";

import { defaultProps, propTypes } from "./CheckoutItem.props";
import styles from "./CheckoutItem.module.scss";

CheckoutItem.defaultProps = defaultProps;
CheckoutItem.propTypes = propTypes;

function CheckoutItem ({
    cartItem,
    onAddItem,
    onClearItem,
    onRemoveItem
}) {
    const {
        imageUrl,
        name,
        price,
        quantity
    } = cartItem;

    return (
        <section className={styles.container}>
            <section className={styles.imageContainer}>
                <img
                    alt="item"
                    className={styles.image}
                    src={imageUrl}
                />
            </section>

            <span className={styles.name}>
                {name}
            </span>

            <span className={styles.quantity}>
                <div
                    className={styles.arrow}
                    onClick={() => onRemoveItem(cartItem)}
                >
                    &#10094;
                </div>

                <span className={styles.value}>
                    {quantity}
                </span>

                <div
                    className={styles.arrow}
                    onClick={() => onAddItem(cartItem)}
                >
                    &#10095;
                </div>
            </span>

            <span className={styles.price}>
                {price}
            </span>

            <div
                className={styles.removeButton}
                onClick={() => onClearItem(cartItem)}
            >
                &#10005;
            </div>
        </section>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onAddItem: (item) => dispatch(addItemToCart(item)),
    onClearItem: (item) => dispatch(clearItemFromCart(item)),
    onRemoveItem: (item) => dispatch(removeItem(item))
});

const ConnectedCheckoutItem = connect(
    null,
    mapDispatchToProps
)(CheckoutItem);

export default ConnectedCheckoutItem;
