import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "assets/crown.svg";
import React from "react";
import {auth} from "utils/firebase/firebase";
import {propTypes} from "./Header.validation";
import styles from "./Header.module.scss";

Header.propTypes = propTypes;

function Header ({user}) {
  const signOut = () => auth.signOut();

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

        <li className={styles.optionItem}
          onClick={user && signOut}>
          {(user)
            ? <span>
              SIGN OUT
            </span>

            : <Link to="/sign-in">
              SIGN IN
            </Link>}
        </li>
      </ul>
    </div>
  );
};

export default Header;
