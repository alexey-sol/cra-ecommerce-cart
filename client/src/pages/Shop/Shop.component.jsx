import { Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "components/Spinner";
import { propTypes } from "./Shop.props";
import { fetchCollectionsStart } from "redux/shop/shop.actions";
import styles from "./Shop.module.scss";

const CollectionsOverview = lazy(() => import("components/CollectionsOverview"));
const Collection = lazy(() => import("pages/Collection"));

Shop.propTypes = propTypes;

function Shop ({ onFetchCollectionsStart, match }) {
    useEffect(() => {
        onFetchCollectionsStart();
    }, [onFetchCollectionsStart]);

    return (
        <section className={styles.container}>
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
        </section>
    ); // TODO: fix ":collectionId" in path
}

const mapDispatchToProps = (dispatch) => ({
    onFetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const ConnectedShop = connect(
    null,
    mapDispatchToProps
)(Shop);

export default ConnectedShop;
