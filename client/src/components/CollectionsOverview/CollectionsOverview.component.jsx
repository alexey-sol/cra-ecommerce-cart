import CollectionPreview from "components/CollectionPreview";
import React from "react";
import {connect} from "react-redux";
import {defaultProps, propTypes} from "./CollectionsOverview.validation";
import {createStructuredSelector} from "reselect";
import {selectShopCollectionsForPreview} from "redux/shop/shop.selectors";
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

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

const ConnectedCollectionsOverview = connect(
  mapStateToProps
)(CollectionsOverview);

export default ConnectedCollectionsOverview;
