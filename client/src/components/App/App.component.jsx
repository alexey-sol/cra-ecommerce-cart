import {Redirect, Route, Switch} from "react-router-dom";
import Checkout from "pages/Checkout";
import Header from "components/Header";
import Home from "pages/Home";
import React, {useEffect} from "react";
import Shop from "pages/Shop";
import SignInAndSignUp from "pages/SignInAndSignUp";
import {checkUserSession} from "redux/auth/auth.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {propTypes} from "./App.validation";
import {selectUser} from "redux/auth/auth.selectors";
import styles from "./App.module.scss";

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
