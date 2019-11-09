import {Redirect, Route, Switch} from "react-router-dom";
import Checkout from "pages/Checkout";
import Header from "components/Header";
import Home from "pages/Home";
import React, {useEffect, useRef} from "react";
import Shop from "pages/Shop";
import SignInAndSignUp from "pages/SignInAndSignUp";
import {auth, createUserProfileDocument} from "utils/firebase/firebase";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {propTypes} from "./App.validation";
import {selectUser} from "redux/auth/auth.selectors";
import {setUser} from "redux/auth/auth.actions";
import styles from "./App.module.scss";

App.propTypes = propTypes;

function App ({setUser, user}) {
  const unsubscribeFromAuth = useRef(null);

  const renderSignIn = () => (
    (user)
      ? <Redirect to="/" />
      : <SignInAndSignUp />
  );

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          const user = {
            id: snapshot.id,
            ...snapshot.data()
          };

          setUser(user);
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribeFromAuth.current();
  }, [setUser]);

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
  setUser: (user) => dispatch(setUser(user))
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
