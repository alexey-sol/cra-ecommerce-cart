import React, { useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import BaseButton from "components/BaseButton";
import CartItem from "components/CartItem";
import { defaultProps, propTypes } from "./CartDropdown.props";
import { selectCartItems } from "redux/cart/cart.selectors";
import { toggleCartShown } from "redux/cart/cart.actions";
import styles from "./CartDropdown.module.scss";

CartDropdown.defaultProps = defaultProps;
CartDropdown.propTypes = propTypes;

function CartDropdown ({
    cartItems,
    history,
    onToggleCartShown
}) {
    const { push } = history;

    const cartItemElements = cartItems.map(cartItem => (
        <CartItem
            item={cartItem}
            key={cartItem.id}
        />
    ));

    const doCheckout = useCallback(() => {
        onToggleCartShown();
        push("/checkout");
    }, [onToggleCartShown, push]);

    const emptyCardMessageElement = (
        <span className={styles.emptyCartMessage}>
            Your cart is empty
        </span>
    );

    return (
        <section className={styles.container}>
            <section className={styles.cartItems}>
                {(cartItems.length > 0)
                    ? cartItemElements
                    : emptyCardMessageElement}
            </section>

            <BaseButton
                disabled={cartItems.length === 0}
                onClick={doCheckout}
            >
                GO TO CHECKOUT
            </BaseButton>
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = (dispatch) => ({
    onToggleCartShown: () => dispatch(toggleCartShown())
});

const ConnectedCartDropdown = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDropdown);

export default withRouter(ConnectedCartDropdown);
