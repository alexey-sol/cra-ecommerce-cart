import {ReactComponent as ShoppingIcon} from "assets/shopping-bag.svg";
import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {propTypes} from "./CartIcon.validation";
import {selectCartItemCount} from "redux/cart/cart.selectors";
import {toggleCartShown} from "redux/cart/cart.actions";
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

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartShown: () => dispatch(toggleCartShown())
});

const ConnectedCartIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

export default ConnectedCartIcon;
