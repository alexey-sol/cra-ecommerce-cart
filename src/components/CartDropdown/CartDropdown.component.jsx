import CartItem from "components/CartItem";
import CustomButton from "components/CustomButton";
import React from "react";
import {connect} from "react-redux";
import {defaultProps, propTypes} from "./CartDropdown.validation";
import styles from "./CartDropdown.module.scss";

CartDropdown.defaultProps = defaultProps;
CartDropdown.propTypes = propTypes;

function CartDropdown ({cartItems}) {
  const cartItemElements = cartItems.map(cartItem => (
    <CartItem
      item={cartItem}
      key={cartItem.id}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        {cartItemElements}
      </div>

      <CustomButton>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

function mapStateToProps ({cart}) {
  return {
    cartItems: cart.cartItems
  };
}

const ConnectedCartDropdown = connect(mapStateToProps)(CartDropdown);

export default ConnectedCartDropdown;
