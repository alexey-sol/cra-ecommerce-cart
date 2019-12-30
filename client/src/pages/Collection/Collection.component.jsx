import CollectionItem from "components/CollectionItem";
import React from "react";
import {connect} from "react-redux";
import {defaultProps, propTypes} from "./Collection.validation";
import {selectShopCollection} from "redux/shop/shop.selectors";
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

function mapStateToProps (state, ownProps) {
  const {collectionId} = ownProps.match.params || {};

  return {
    collection: selectShopCollection(collectionId)(state)
  };
}

const ConnectedCollection = connect(
  mapStateToProps
)(Collection);

export default ConnectedCollection;
