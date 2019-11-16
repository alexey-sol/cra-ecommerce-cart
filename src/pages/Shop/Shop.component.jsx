import {Route} from "react-router-dom";
import Collection from "pages/Collection";
import CollectionsOverview from "components/CollectionsOverview";
import React from "react";
import {propTypes} from "./Shop.validation";
import styles from "./Shop.module.scss";

Shop.propTypes = propTypes;

function Shop ({match}) {
  return (
    <div className={styles.container}>
      <Route
        component={CollectionsOverview}
        exact
        path={match.path}
      />

      <Route
        component={Collection}
        path={`${match.path}/:collectionId`}
      />
    </div>
  );
};

export default Shop;
