import CollectionItem from "components/CollectionItem";
import React from "react";
import {defaultProps, propTypes} from "./Collection.component.validation";
import styles from "./Collection.module.scss";

Collection.defaultProps = defaultProps;
Collection.propTypes = propTypes;

function Collection ({collection}) {
  const {items = [], title} = collection;

  const itemElements = items.map(item => (
    <CollectionItem
      item={item}
      key={item.id}
    />
  ));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.items}>
        {itemElements}
      </div>
    </div>
  );
};

export default Collection;
