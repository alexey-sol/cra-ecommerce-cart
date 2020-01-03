import {ReactComponent as ShoppingIcon} from "assets/shopping-bag.svg";
import React from "react";
import {propTypes} from "./CartIcon.validation";
import styles from "./CartIcon.module.scss";

CartIcon.propTypes = propTypes;

function CartIcon ({itemCount, toggleCartShown}) {
  return (
    <div
      className={styles.container}
      onClick={toggleCartShown}
    >
      <ShoppingIcon className={styles.shoppingIcon} />

      <span className={styles.itemCount}>
        {itemCount}
      </span>
    </div>
  );
};

export default CartIcon;
