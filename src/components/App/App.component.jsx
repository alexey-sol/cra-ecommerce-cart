import {Route, Switch} from "react-router-dom";
import Home from "pages/Home";
import React from "react";
import Shop from "pages/Shop";
import styles from "./App.module.scss";

function App () {
  return (
    <div className={styles.container}>
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
      </Switch>
    </div>
  );
}

export default App;
