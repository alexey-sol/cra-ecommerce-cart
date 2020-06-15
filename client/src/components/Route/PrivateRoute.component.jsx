import { Redirect, Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { defaultProps, propTypes } from "./Route.props";
import { selectUser } from "redux/auth/auth.selectors";

PrivateRoute.defaultProps = defaultProps;
PrivateRoute.propTypes = propTypes;

function PrivateRoute ({
    component: Component,
    user,
    ...rest
}) {
    const renderComponent = (props) => (user)
        ? <Component {...props} />
        : <Redirect to="/sign-in" />;

    return (
        <Route
            {...rest}
            render={renderComponent}
        />
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectUser
});

const ConnectedPrivateRoute = connect(
    mapStateToProps
)(PrivateRoute);

export default ConnectedPrivateRoute;
