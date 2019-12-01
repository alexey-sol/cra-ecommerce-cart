import {Route} from "react-router-dom";
import Collection from "pages/Collection";
import CollectionsOverview from "components/CollectionsOverview";
import React, {useEffect, useState, useRef} from "react";
import WithSpinner from "components/WithSpinner";
import {connect} from "react-redux";
import {convertCollectionsSnapshotToMap, firestore}
  from "utils/firebase/firebase";
import {propTypes} from "./Shop.validation";
import {updateCollections} from "redux/shop/shop.actions";
import styles from "./Shop.module.scss";

Shop.propTypes = propTypes;

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

function Shop ({match, updateCollections}) {
  const [isLoading, setIsLoading] = useState(true);
  const unsubscribeFromSnapshot = useRef(null);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    unsubscribeFromSnapshot.current = collectionRef.onSnapshot(
      async (snapshot) => {
        const collections = await convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collections);
        setIsLoading(false);
      });

    return () => unsubscribeFromSnapshot.current();
  }, [updateCollections]);

  const renderCollectionsOverview = (props) => (
    <CollectionsOverviewWithSpinner
      isLoading={isLoading}
      {...props}
    />
  );

  const renderCollection = (props) => (
    <CollectionWithSpinner
      isLoading={isLoading}
      {...props}
    />
  );

  return (
    <div className={styles.container}>
      <Route
        exact
        path={match.path}
        render={renderCollectionsOverview}
      />

      <Route
        path={`${match.path}/:collectionId`}
        render={renderCollection}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
});

const ConnectedShop = connect(
  null,
  mapDispatchToProps
)(Shop);

export default ConnectedShop;
