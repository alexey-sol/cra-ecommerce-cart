import React from "react";
import { defaultProps, propTypes } from "./CartItem.props";
import styles from "./CartItem.module.scss";

CartItem.defaultProps = defaultProps;
CartItem.propTypes = propTypes;

function CartItem ({ item }) {
    const {
        imageUrl,
        name,
        price,
        quantity
    } = item;

    return (
        <section className={styles.container}>
            <img
                alt="item"
                className={styles.image}
                src={imageUrl}
            />

            <section className={styles.itemDetails}>
                <span className={styles.name}>
                    {name}
                </span>

                <span className={styles.price}>
                    {`${quantity} x $${price}`}
                </span>
            </section>
        </section>
    );
}

export default CartItem;
