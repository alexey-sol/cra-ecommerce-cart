import { Redirect, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ErrorBoundary from "components/ErrorBoundary";
import Footer from "components/Footer";
import Header from "components/Header";
import Spinner from "components/Spinner";
import { checkSession } from "redux/auth/auth.actions";
import { propTypes } from "./App.props";
import { selectUser } from "redux/auth/auth.selectors";
import styles from "./App.module.scss";

const Checkout = lazy(() => import("pages/Checkout"));
const Home = lazy(() => import("pages/Home"));
const Page404 = lazy(() => import("pages/Page404"));
const Shop = lazy(() => import("pages/Shop"));
const SignInAndSignUp = lazy(() => import("pages/SignInAndSignUp"));

App.propTypes = propTypes;

function App ({ onCheckSession, user }) {
    const renderSignIn = () => ((user)
        ? <Redirect to="/" />
        : <SignInAndSignUp />
    );

    useEffect(() => {
        onCheckSession();
    }, [onCheckSession]);

    return (
        <section className={styles.container}>
            <Header />

            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Route
                            component={Home}
                            exact
                            path="/"
                        />

                        <Route
                            component={Shop}
                            path="/shop"
                        />

                        <Route
                            component={Checkout}
                            exact
                            path="/checkout"
                        />

                        <Route
                            exact
                            path="/sign-in"
                            render={renderSignIn}
                        />

                        <Route
                            component={Page404}
                        />
                    </Switch>
                </Suspense>
            </ErrorBoundary>

            <Footer />
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectUser
});

const mapDispatchToProps = (dispatch) => ({
    onCheckSession: () => dispatch(checkSession())
});

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ConnectedApp;
