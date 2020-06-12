import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import CollectionItem from "components/CollectionItem";
import WithSpinner from "components/WithSpinner";
import { defaultProps, propTypes } from "./Collection.props";

import {
    selectIsCollectionsLoaded,
    selectShopCollection
} from "redux/shop/shop.selectors";

import styles from "./Collection.module.scss";

Collection.defaultProps = defaultProps;
Collection.propTypes = propTypes;

function Collection ({ collection }) {
    const { items = [], title } = collection;

    const itemElements = items.map(item => (
        <CollectionItem
            item={item}
            key={item.id}
        />
    ));

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>

            <section className={styles.items}>
                {itemElements}
            </section>
        </section>
    );
}

function mapStateToProps (state, ownProps) {
    const { collectionId } = ownProps.match.params || {};

    return {
        collection: selectShopCollection(collectionId)(state),
        isLoading: (newState) => !selectIsCollectionsLoaded(newState)
    };
}

const ConnectedCollection = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);

export default ConnectedCollection;
