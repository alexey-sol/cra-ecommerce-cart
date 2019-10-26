import Directory from "components/Directory";
import React from "react";
import styles from "./Home.module.scss";

function Home () {
  return (
    <div className={styles.container}>
      <Directory />
    </div>
  );
};

export default Home;
