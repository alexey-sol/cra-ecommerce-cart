import React, { useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import BaseButton from "components/BaseButton";
import CartItem from "components/CartItem";
import { defaultProps, propTypes } from "./CartDropdown.props";
import { selectCartItems } from "redux/cart/cart.selectors";
import { selectUser } from "redux/auth/auth.selectors";
import { toggleCartShown } from "redux/cart/cart.actions";
import styles from "./CartDropdown.module.scss";

CartDropdown.defaultProps = defaultProps;
CartDropdown.propTypes = propTypes;

function CartDropdown ({
    cartItems,
    history,
    onToggleCartShown,
    user
}) {
    const { push } = history;
    const dropdownRef = useRef(null);

    useEffect(() => {
        const dropdown = dropdownRef.current;

        if (!dropdown) {
            return;
        }

        const handleClick = ({ target }) => {
            const isClickOutside = !dropdown.contains(target);

            if (isClickOutside) {
                onToggleCartShown();
            }
        };

        const handleKeydown = ({ key }) => {
            if (key === "Escape") {
                onToggleCartShown();
            }
        };

        document.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [onToggleCartShown]);

    const cartItemElements = cartItems.map(cartItem => (
        <CartItem
            item={cartItem}
            key={cartItem.id}
        />
    ));

    const userIsAuthed = Boolean(user);

    const checkSessionAndRedirect = useCallback(() => {
        onToggleCartShown();

        return (userIsAuthed)
            ? push("/checkout")
            : push("/sign-in");
    }, [onToggleCartShown, push, userIsAuthed]);

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
                onClick={checkSessionAndRedirect}
            >
                GO TO CHECKOUT
            </BaseButton>
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    user: selectUser
});

const mapDispatchToProps = (dispatch) => ({
    onToggleCartShown: () => dispatch(toggleCartShown())
});

const ConnectedCartDropdown = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDropdown);

export default withRouter(ConnectedCartDropdown);
