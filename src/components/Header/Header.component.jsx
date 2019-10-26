import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "assets/crown.svg";
import React from "react";
import styles from "./Header.module.scss";

function Header () {
  return (
    <div className={styles.container}>
      <Link
        className={styles.logoContainer}
        to="/"
      >
        <Logo className={styles.logo} />
      </Link>

      <ul className={styles.optionsList}>
        <li>
          <Link
            className={styles.optionItem}
            to="/shop"
          >
            SHOP
          </Link>
        </li>

        <li>
          <Link
            className={styles.optionItem}
            to="/contacts"
          >
            CONTACTS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
