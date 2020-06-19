import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "redux/cart/cart.actions";
import { defaultProps, propTypes } from "./CartItem.props";
import styles from "./CartItem.module.scss";

CartItem.defaultProps = defaultProps;
CartItem.propTypes = propTypes;

function CartItem ({ item, onClearItem }) {
    const {
        album,
        artist,
        imageUrl,
        price,
        quantity
    } = item;

    const description = `${artist} - ${album}`;

    return (
        <section className={styles.container}>
            <img
                alt="item"
                className={styles.image}
                src={imageUrl}
                title={description}
            />

            <section className={styles.content}>
                <section className={styles.itemDetails}>
                    <span className={styles.description}>
                        {description}
                    </span>

                    <span className={styles.price}>
                        {`${quantity} x $${price}`}
                    </span>
                </section>

                <div>
                    <div
                        className={styles.removeButton}
                        onClick={() => onClearItem(item)}
                    >
                        &#10005;
                    </div>
                </div>
            </section>
        </section>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onClearItem: (item) => dispatch(clearItemFromCart(item))
});

const ConnectedCartItem = connect(
    null,
    mapDispatchToProps
)(CartItem);

export default ConnectedCartItem;
