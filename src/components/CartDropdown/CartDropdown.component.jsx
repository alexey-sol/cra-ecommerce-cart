import CustomButton from "components/CustomButton";
import React from "react";
import {defaultProps, propTypes} from "./CartDropdown.validation";
import styles from "./CartDropdown.module.scss";

CartDropdown.defaultProps = defaultProps;
CartDropdown.propTypes = propTypes;

function CartDropdown () {
  return (
    <div className={styles.container}>
      <div className={styles.cartItems} />

      <CustomButton>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
