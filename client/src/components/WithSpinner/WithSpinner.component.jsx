import React from "react";
import Spinner from "components/Spinner";
import {defaultProps, propTypes} from "./WithSpinner.validation";

WithSpinner.defaultProps = defaultProps;
WithSpinner.propTypes = propTypes;

function WithSpinner (WrappedComponent) {
  return ({isLoading, ...rest}) => {
    const renderSpinnerOverlay = () => (
      <Spinner />
    );

    const renderWrappedComponent = () => (
      <WrappedComponent {...rest} />
    );

    return (isLoading)
      ? renderSpinnerOverlay()
      : renderWrappedComponent();
  };
}

export default WithSpinner;
