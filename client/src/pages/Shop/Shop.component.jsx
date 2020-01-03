import {Route} from "react-router-dom";
import React, {Suspense, lazy, useEffect} from "react";
import Spinner from "components/Spinner";
import {connect} from "react-redux";
import {propTypes} from "./Shop.validation";
import {fetchCollectionsStart} from "redux/shop/shop.actions";
import styles from "./Shop.module.scss";

const CollectionsOverview =
  lazy(() => import("components/CollectionsOverview"));
const Collection =
  lazy(() => import("pages/Collection"));

Shop.propTypes = propTypes;

function Shop ({fetchCollectionsStart, match}) {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className={styles.container}>
      <Suspense fallback={<Spinner />}>
        <Route
          component={CollectionsOverview}
          exact
          path={match.path}
        />

        <Route
          component={Collection}
          path={`${match.path}/:collectionId`}
        />
      </Suspense>
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
