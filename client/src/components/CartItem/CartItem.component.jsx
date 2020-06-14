import React from "react";
import { defaultProps, propTypes } from "./CartItem.props";
import styles from "./CartItem.module.scss";

CartItem.defaultProps = defaultProps;
CartItem.propTypes = propTypes;

function CartItem ({ item }) {
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

            <section className={styles.itemDetails}>
                <span className={styles.description}>
                    {description}
                </span>

                <span className={styles.price}>
                    {`${quantity} x $${price}`}
                </span>
            </section>
        </section>
    );
}

export default CartItem;
