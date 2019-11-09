import CartItem from "components/CartItem";
import CustomButton from "components/CustomButton";
import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {defaultProps, propTypes} from "./CartDropdown.validation";
import {selectCartItems} from "redux/cart/cart.selectors";
import {toggleCartShown} from "redux/cart/cart.actions";
import {withRouter} from "react-router-dom";
import styles from "./CartDropdown.module.scss";

CartDropdown.defaultProps = defaultProps;
CartDropdown.propTypes = propTypes;

function CartDropdown ({cartItems, dispatch, history}) {
  const cartItemElements = cartItems.map(cartItem => (
    <CartItem
      item={cartItem}
      key={cartItem.id}
    />
  ));

  const doCheckout = () => {
    history.push("/checkout");
    dispatch(toggleCartShown());
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

      <CustomButton onClick={doCheckout}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const ConnectedCartDropdown = connect(mapStateToProps)(CartDropdown);

export default withRouter(ConnectedCartDropdown);
