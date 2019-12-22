import {Route} from "react-router-dom";
import Collection from "pages/Collection";
import CollectionsOverview from "components/CollectionsOverview";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {propTypes} from "./Shop.validation";
import {fetchCollectionsStart} from "redux/shop/shop.actions";
import styles from "./Shop.module.scss";

Shop.propTypes = propTypes;

function Shop ({fetchCollectionsStart, match}) {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const ConnectedShop = connect(
  null,
  mapDispatchToProps
)(Shop);

export default ConnectedShop;
