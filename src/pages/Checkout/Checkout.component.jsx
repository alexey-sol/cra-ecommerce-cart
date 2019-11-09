import CheckoutItem from "components/CheckoutItem";
import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {defaultProps, propTypes} from "./Checkout.validation";
import {selectCartItems, selectCartTotal} from "redux/cart/cart.selectors";
import styles from "./Checkout.module.scss";

Checkout.defaultProps = defaultProps;
Checkout.propTypes = propTypes;

function Checkout ({cartItems, total}) {
  const cartItemElements = cartItems.map(cartItem => (
    <CheckoutItem
      cartItem={cartItem}
      key={cartItem.id}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
      </div>

      {cartItemElements}

      <div className={styles.total}>
        <span>
          TOTAL: {total}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const ConnectedCheckout = connect(mapStateToProps)(Checkout);

export default ConnectedCheckout;
