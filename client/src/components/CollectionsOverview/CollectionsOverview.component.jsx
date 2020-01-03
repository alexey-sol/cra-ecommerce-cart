import CollectionPreview from "components/CollectionPreview";
import React from "react";
import {defaultProps, propTypes} from "./CollectionsOverview.validation";
import styles from "./CollectionsOverview.module.scss";

CollectionsOverview.defaultProps = defaultProps;
CollectionsOverview.propTypes = propTypes;

function CollectionsOverview ({collections}) {
  const collectionElements = collections.map(({id, ...rest}) => (
    <CollectionPreview
      key={id}
      {...rest}
    />
  ));

  return (
    <div className={styles.container}>
      {collectionElements}
    </div>
  );
}

export default CollectionsOverview;
