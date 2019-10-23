import HomePage from "components/HomePage/HomePage.component";
import React from "react";
import styles from "./App.module.scss";

function App () {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
}

export default App;
