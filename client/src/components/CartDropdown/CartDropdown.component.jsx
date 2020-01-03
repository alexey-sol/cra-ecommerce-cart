import CartItem from "components/CartItem";
import CustomButton from "components/CustomButton";
import React from "react";
import {defaultProps, propTypes} from "./CartDropdown.validation";
import {withRouter} from "react-router-dom";
import styles from "./CartDropdown.module.scss";

CartDropdown.defaultProps = defaultProps;
CartDropdown.propTypes = propTypes;

function CartDropdown ({cartItems, history, toggleCartShown}) {
  const cartItemElements = cartItems.map(cartItem => (
    <CartItem
      item={cartItem}
      key={cartItem.id}
    />
  ));

  const doCheckout = () => {
    history.push("/checkout");
    toggleCartShown();
  };

  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        {(cartItems.length)
          ? cartItemElements
          : <span className={styles.emptyCartMessage}>
            Your cart is empty
          </span>}
      </div>

      <CustomButton
        disabled={cartItems.length === 0}
        onClick={doCheckout}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
