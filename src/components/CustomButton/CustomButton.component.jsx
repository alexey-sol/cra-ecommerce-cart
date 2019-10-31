import React from "react";
import {defaultProps, propTypes} from "./CustomButton.validation";
import classnames from "classnames";
import styles from "./CustomButton.module.scss";

CustomButton.defaultProps = defaultProps;
CustomButton.propTypes = propTypes;

function CustomButton ({children, isGoogleSignIn, ...props}) {
  const classNames = classnames(
    styles.button,
    (isGoogleSignIn) ? styles.googleSignIn : ""
  );

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
};

export default CustomButton;
