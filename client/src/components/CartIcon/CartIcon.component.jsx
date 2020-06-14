import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { defaultProps, propTypes } from "./CartIcon.props";
import { selectCartItemCount } from "redux/cart/cart.selectors";
import { toggleCartShown } from "redux/cart/cart.actions";
import styles from "./CartIcon.module.scss";

CartIcon.defaultProps = defaultProps;
CartIcon.propTypes = propTypes;

function CartIcon ({ itemCount, onToggleCartShown }) {
    return (
        <section
            className={styles.container}
            onClick={onToggleCartShown}
        >
            <ShoppingIcon className={styles.shoppingIcon} />

            <span className={styles.itemCount}>
                {itemCount}
            </span>
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
});

const mapDispatchToProps = (dispatch) => ({
    onToggleCartShown: () => dispatch(toggleCartShown())
});

const ConnectedCartIcon = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);

export default ConnectedCartIcon;
