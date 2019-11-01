import {Route, Switch} from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import React, {useEffect, useRef, useState} from "react";
import Shop from "pages/Shop";
import SignInAndSignUp from "pages/SignInAndSignUp";
import {auth, createUserProfileDocument} from "utils/firebase/firebase";
import styles from "./App.module.scss";

function App () {
  const [user, setUser] = useState(null);
  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          const currentUser = {
            id: snapshot.id,
            ...snapshot.data()
          };

          setUser(currentUser);
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribeFromAuth.current();
  }, []);

  return (
    <div className={styles.container}>
      <Header user={user} />

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
          component={SignInAndSignUp}
          path="/sign-in"
        />
      </Switch>
    </div>
  );
}

export default App;
