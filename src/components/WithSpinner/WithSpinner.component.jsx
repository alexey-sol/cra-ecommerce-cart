import React from "react";
import {defaultProps, propTypes} from "./WithSpinner.validation";
import styles from "./WithSpinner.module.scss";

WithSpinner.defaultProps = defaultProps;
WithSpinner.propTypes = propTypes;

function WithSpinner (WrappedComponent) {
  return ({isLoading, ...rest}) => {
    const renderSpinnerOverlay = () => (
      <div className={styles.overlay}>
        <div className={styles.spinner} />
      </div>
    );
    console.log(isLoading, rest)
    const renderWrappedComponent = () => (
      <WrappedComponent {...rest} />
    );

    return (isLoading)
      ? renderSpinnerOverlay()
      : renderWrappedComponent();
  };
}

export default WithSpinner;
