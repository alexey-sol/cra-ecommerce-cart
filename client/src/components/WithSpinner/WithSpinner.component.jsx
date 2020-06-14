import React from "react";

import Spinner from "components/Spinner";
import { propTypes } from "./WithSpinner.props";

import {
    defaultProps as subDefaultProps,
    propTypes as subPropTypes
} from "./Sub.props";

WithSpinner.propTypes = propTypes;

function WithSpinner (WrappedComponent) {
    const Sub = ({ isFetching, ...rest }) => (isFetching)
        ? <Spinner />
        : <WrappedComponent {...rest} />;

    Sub.defaultProps = subDefaultProps;
    Sub.propTypes = subPropTypes;

    return Sub;
}

export default WithSpinner;
