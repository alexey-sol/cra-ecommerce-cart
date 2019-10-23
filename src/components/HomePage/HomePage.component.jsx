import React from "react";
import styles from "./HomePage.module.scss";

function HomePage () {
  return (
    <div className={styles.container}>
      <div className={styles.directoryMenu}>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              HATS
            </h1>
            <span className={styles.subTitle}>
              SHOP NOW
            </span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              JACKETS
            </h1>
            <span className={styles.subTitle}>
              SHOP NOW
            </span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              SHOES
            </h1>
            <span className={styles.subTitle}>
              SHOP NOW
            </span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              WOMEN
            </h1>
            <span className={styles.subTitle}>
              SHOP NOW
            </span>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              MEN
            </h1>
            <span className={styles.subTitle}>
              SHOP NOW
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
