import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "assets/crown.svg";
import CartDropdown from "components/CartDropdown";
import CartIcon from "components/CartIcon";
import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {propTypes} from "./Header.validation";
import {selectUser} from "redux/auth/auth.selectors";
import {signOutStart} from "redux/auth/auth.actions";
import classnames from "classnames";
import styles from "./Header.module.scss";

Header.propTypes = propTypes;

function Header ({cartIsShown, signOutStart, user}) {
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
          onClick={signOutStart}
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

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default ConnectedHeader;
