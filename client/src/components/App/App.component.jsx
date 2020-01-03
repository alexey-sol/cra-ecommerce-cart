import {Redirect, Route, Switch} from "react-router-dom";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/Header";
import React, {Suspense, lazy, useEffect} from "react";
import Spinner from "components/Spinner";
import {checkUserSession} from "redux/auth/auth.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {propTypes} from "./App.validation";
import {selectUser} from "redux/auth/auth.selectors";
import styles from "./App.module.scss";

const Checkout = lazy(() => import("pages/Checkout"));
const Home = lazy(() => import("pages/Home"));
const Shop = lazy(() => import("pages/Shop"));
const SignInAndSignUp = lazy(() => import("pages/SignInAndSignUp"));

App.propTypes = propTypes;

function App ({checkUserSession, user}) {
  const renderSignIn = () => (
    (user)
      ? <Redirect to="/" />
      : <SignInAndSignUp />
  );

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className={styles.container}>
      <Header />

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
