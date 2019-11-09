import React from "react";
import {defaultProps, propTypes} from "./CheckoutItem.validation";
import styles from "./CheckoutItem.module.scss";

CheckoutItem.defaultProps = defaultProps;
CheckoutItem.propTypes = propTypes;

function CheckoutItem ({cartItem}) {
  const {imageUrl, name, price, quantity} = cartItem;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          alt="item"
          className={styles.image}
          src={imageUrl}
        />
      </div>

      <span className={styles.name}>
        {name}
      </span>

      <span className={styles.quantity}>
        {quantity}
      </span>

      <span className={styles.price}>
        {price}
      </span>

      <div className={styles.removeButton}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
