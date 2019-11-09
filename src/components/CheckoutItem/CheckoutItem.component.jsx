import React from "react";
import {
  addItemToCart, clearItemFromCart, removeItem
} from "redux/cart/cart.actions";
import {connect} from "react-redux";
import {defaultProps, propTypes} from "./CheckoutItem.validation";
import styles from "./CheckoutItem.module.scss";

CheckoutItem.defaultProps = defaultProps;
CheckoutItem.propTypes = propTypes;

function CheckoutItem ({addItem, cartItem, clearItem, removeItem}) {
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
        <div
          className={styles.arrow}
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>

        <span className={styles.value}>
          {quantity}
        </span>

        <div
          className={styles.arrow}
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </div>
      </span>

      <span className={styles.price}>
        {price}
      </span>

      <div
        className={styles.removeButton}
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

const ConnectedCheckoutItem = connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

export default ConnectedCheckoutItem;
