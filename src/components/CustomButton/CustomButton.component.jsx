import React from "react";
import {defaultProps, propTypes} from "./CustomButton.validation";
import classnames from "classnames";
import styles from "./CustomButton.module.scss";

CustomButton.defaultProps = defaultProps;
CustomButton.propTypes = propTypes;

function CustomButton (props) {
  const {children, className, isGoogleSignIn, isInverted, ...rest} = props;

  const classNames = classnames(
    styles.button,
    className,
    (isGoogleSignIn) ? styles.googleSignIn : "",
    (isInverted) ? styles.inverted : ""
  );

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
};

export default CustomButton;
