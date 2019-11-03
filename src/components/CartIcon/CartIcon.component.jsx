import {ReactComponent as ShoppingIcon} from "assets/shopping-bag.svg";
import React from "react";
import {connect} from "react-redux";
import {propTypes} from "./CartIcon.validation";
import {toggleCartShown} from "redux/cart/cart.actions";
import styles from "./CartIcon.module.scss";

CartIcon.propTypes = propTypes;

function CartIcon ({toggleCartShown}) {
  return (
    <div
      className={styles.container}
      onClick={toggleCartShown}
    >
      <ShoppingIcon className={styles.shoppingIcon} />

      <span className={styles.itemCount}>
        0
      </span>
    </div>
  );
};

function mapDispatchToProps (dispatch) {
  return {
    toggleCartShown: () => dispatch(toggleCartShown())
  };
}

const ConnectedCartIcon = connect(
  null,
  mapDispatchToProps
)(CartIcon);

export default ConnectedCartIcon;
