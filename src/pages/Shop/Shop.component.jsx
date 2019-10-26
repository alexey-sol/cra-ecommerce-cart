import CollectionPreview from "components/CollectionPreview";
import React, {useState} from "react";
import SHOP_DATA from "./Shop.data";
import styles from "./Shop.module.scss";

function Shop () {
  const [collections] = useState(SHOP_DATA);
  const collectionElements = collections.map(({id, ...rest}) => (
    <CollectionPreview
      key={id}
      {...rest}
    />
  ));

  return (
    <ul className={styles.container}>
      {collectionElements}
    </ul>
  );
};

export default Shop;
