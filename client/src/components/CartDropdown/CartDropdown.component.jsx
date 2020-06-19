import React, { useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import BaseButton from "components/BaseButton";
import CartItem from "components/CartItem";
import { defaultProps, propTypes } from "./CartDropdown.props";
import { selectCartItems } from "redux/cart/cart.selectors";
import { toggleCartShown } from "redux/cart/cart.actions";
import styles from "./CartDropdown.module.scss";

CartDropdown.defaultProps = defaultProps;
CartDropdown.propTypes = propTypes;

function CartDropdown ({
    cartButtonRef,
    cartItems,
    history,
    onToggleCartShown
}) {
    const { push } = history;
    const dropdownRef = useRef(null);

    useEffect(() => {
        const cartButton = cartButtonRef.current;
        const dropdown = dropdownRef.current;

        if (!cartButton || !dropdown) {
            return;
        }

        const handleMousedown = ({ target }) => {
            const isClickOutside =
                !dropdown.contains(target) &&
                !cartButton.contains(target);

            if (isClickOutside) {
                onToggleCartShown();
            }
        };

        const handleKeydown = ({ key }) => {
            if (key === "Escape") {
                onToggleCartShown();
            }
        };

        document.addEventListener("mousedown", handleMousedown);
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("mousedown", handleMousedown);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [cartButtonRef, onToggleCartShown]);

    const cartItemElements = cartItems.map(cartItem => (
        <CartItem
            item={cartItem}
            key={cartItem.id}
        />
    ));

    const redirectToCheckout = useCallback(() => {
        onToggleCartShown();
        push("/checkout");
    }, [onToggleCartShown, push]);

    const emptyCardMessageElement = (
        <span className={styles.emptyCartMessage}>
            Your cart is empty
        </span>
    );

    return (
        <section
            className={styles.container}
            ref={dropdownRef}
        >
            <section className={styles.cartItems}>
                {(cartItems.length > 0)
                    ? cartItemElements
                    : emptyCardMessageElement}
            </section>

            <BaseButton
                disabled={cartItems.length === 0}
                onClick={redirectToCheckout}
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
