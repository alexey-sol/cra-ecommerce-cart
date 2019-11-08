import React from "react";
import {defaultProps, propTypes} from "./CartItem.validation";
import styles from "./CartItem.module.scss";

CartItem.defaultProps = defaultProps;
CartItem.propTypes = propTypes;

function CartItem ({item}) {
  const {imageUrl, name, price, quantity} = item;

  return (
    <div className={styles.container}>
      <img
        alt="item"
        className={styles.image}
        src={imageUrl}
      />

      <div className={styles.itemDetails}>
        <span className={styles.name}>
          {name}
        </span>

        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
