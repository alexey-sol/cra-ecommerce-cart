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
        album,
        artist,
        imageUrl,
        price,
        quantity
    } = cartItem;

    const descriptionCell = (
        <div>
            <div className={styles.bold}>
                {artist}
            </div>

            <div>
                {album}
            </div>
        </div>
    );

    return (
        <tr className={styles.container}>
            <td className={styles.imageContainer}>
                <img
                    alt="item"
                    className={styles.image}
                    src={imageUrl}
                    title={`${artist} - ${album}`}
                />
            </td>

            <td className={styles.description}>
                {descriptionCell}
            </td>

            <td className={styles.quantity}>
                <div className={styles.count}>
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
                </div>
            </td>

            <td className={styles.price}>
                {price}
            </td>

            <td
                className={styles.removeButton}
                onClick={() => onClearItem(cartItem)}
            >
                &#10005;
            </td>
        </tr>
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
