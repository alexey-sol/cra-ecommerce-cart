import React from "react";
import classnames from "classnames";

import { defaultProps, propTypes } from "./BaseButton.props";
import styles from "./BaseButton.module.scss";

BaseButton.defaultProps = defaultProps;
BaseButton.propTypes = propTypes;

function BaseButton (props) {
    const {
        children,
        className,
        isGoogleSignIn,
        isInverted,
        ...rest
    } = props;

    const classNames = classnames(
        styles.button,
        className,
        (isGoogleSignIn) ? styles.googleSignIn : "",
        (isInverted) ? styles.inverted : ""
    );

    return (
        <button
            {...rest}
            className={classNames}
        >
            {children}
        </button>
    );
}

export default BaseButton;
