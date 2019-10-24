import React from "react";
import {defaultProps, propTypes} from "./MenuItem.validation";
import classnames from "classnames";
import styles from "./MenuItem.module.scss";

MenuItem.defaultProps = defaultProps;
MenuItem.propTypes = propTypes;

function MenuItem ({imageUrl, size, title}) {
  const containerClassNames = classnames(
    styles.container,
    styles[size]
  );

  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className={containerClassNames}>
      <div
        className={styles.backgroundImage}
        style={backgroundImageStyle}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          {title.toUpperCase()}
        </h1>

        <span className={styles.subTitle}>
          SHOP NOW
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
