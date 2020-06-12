import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "components/CollectionPreview";
import WithSpinner from "components/WithSpinner";
import { defaultProps, propTypes } from "./CollectionsOverview.props";

import {
    selectIsCollectionFetching,
    selectShopCollectionsForPreview
} from "redux/shop/shop.selectors";

import styles from "./CollectionsOverview.module.scss";

CollectionsOverview.defaultProps = defaultProps;
CollectionsOverview.propTypes = propTypes;

function CollectionsOverview ({ collections }) {
    const collectionElements = collections.map(({ id, ...rest }) => (
        <CollectionPreview
            key={id}
            {...rest}
        />
    ));

    return (
        <section className={styles.container}>
            {collectionElements}
        </section>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview,
    isLoading: selectIsCollectionFetching
});

const ConnectedCollectionsOverview = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default ConnectedCollectionsOverview;
