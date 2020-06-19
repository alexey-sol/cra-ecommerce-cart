import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import classnames from "classnames";

import CartDropdown from "components/CartDropdown";
import CartIcon from "components/CartIcon";
import { propTypes } from "./Header.props";
import { selectCartIsShown } from "redux/cart/cart.selectors";
import { selectUser } from "redux/auth/auth.selectors";
import { signOutStart } from "redux/auth/auth.actions";
import styles from "./Header.module.scss";

Header.propTypes = propTypes;

function Header ({ cartIsShown, onSignOutStart, user }) {
    const cartButtonRef = useRef(null);

    const cartIconItemClassNames = classnames(
        styles.optionItem,
        styles.cartIconItem
    );

    return (
        <section className={styles.container}>
            <div className={styles.homeTab}>
                <Link to="/">
                    HOME
                </Link>
            </div>

            <ul className={styles.optionsList}>
                <li className={styles.optionItem}>
                    <Link to="/shop">
                        SHOP
                    </Link>
                </li>

                <li
                    className={styles.optionItem}
                >
                    {(user)
                        ? <span onClick={onSignOutStart}>SIGN OUT</span>
                        : <Link to="/sign-in">SIGN IN</Link>}
                </li>

                <li
                    className={cartIconItemClassNames}
                    ref={cartButtonRef}
                >
                    <CartIcon />
                </li>
            </ul>

            {cartIsShown && <CartDropdown cartButtonRef={cartButtonRef} />}
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    cartIsShown: selectCartIsShown,
    user: selectUser
});

const mapDispatchToProps = (dispatch) => ({
    onSignOutStart: () => dispatch(signOutStart())
});

const ConnectedHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default ConnectedHeader;
