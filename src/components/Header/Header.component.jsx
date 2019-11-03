import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "assets/crown.svg";
import CartDropdown from "components/CartDropdown";
import CartIcon from "components/CartIcon";
import React from "react";
import {auth} from "utils/firebase/firebase";
import {connect} from "react-redux";
import {propTypes} from "./Header.validation";
import classnames from "classnames";
import styles from "./Header.module.scss";

Header.propTypes = propTypes;

function Header ({cartIsShown, user}) {
  const signOut = () => auth.signOut();

  const cartIconItemClassNames = classnames(
    styles.optionItem,
    styles.cartIconItem
  );

  return (
    <div className={styles.container}>
      <Link
        className={styles.logoContainer}
        to="/"
      >
        <Logo className={styles.logo} />
      </Link>

      <ul className={styles.optionsList}>
        <li className={styles.optionItem}>
          <Link to="/shop">
            SHOP
          </Link>
        </li>

        <li className={styles.optionItem}>
          <Link to="/contacts">
            CONTACTS
          </Link>
        </li>

        <li
          className={styles.optionItem}
          onClick={user && signOut}
        >
          {(user)
            ? <span>
              SIGN OUT
            </span>

            : <Link to="/sign-in">
              SIGN IN
            </Link>}
        </li>

        <li className={cartIconItemClassNames}>
          <CartIcon />
        </li>
      </ul>

      {cartIsShown && <CartDropdown />}
    </div>
  );
};

function mapStateToProps ({auth, cart}) {
  return {
    cartIsShown: cart.cartIsShown,
    user: auth.user
  };
}

const ConnectedHeader = connect(
  mapStateToProps
)(Header);

export default ConnectedHeader;
