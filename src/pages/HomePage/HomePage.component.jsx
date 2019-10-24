import Directory from "components/Directory/Directory.component";
import React from "react";
import styles from "./HomePage.module.scss";

function HomePage () {
  return (
    <div className={styles.container}>
      <Directory />
    </div>
  );
};

export default HomePage;
