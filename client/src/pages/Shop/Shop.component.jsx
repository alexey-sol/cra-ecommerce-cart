import { Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "components/Spinner";
import { fetchCategoriesStart } from "redux/shop/shop.actions";
import { propTypes } from "./Shop.props";
import styles from "./Shop.module.scss";

const Category = lazy(() => import("pages/Category"));
const CategoriesOverview = lazy(() => import("components/CategoriesOverview"));

Shop.propTypes = propTypes;

function Shop ({ onFetchCategoriesStart, match }) {
    useEffect(() => {
        onFetchCategoriesStart();
    }, [onFetchCategoriesStart]);

    return (
        <section className={styles.container}>
            <Suspense fallback={<Spinner />}>
                <Route
                    component={CategoriesOverview}
                    exact
                    path={match.path}
                />

                <Route
                    component={Category}
                    path={`${match.path}/:categoryId`}
                />
            </Suspense>
        </section>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onFetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

const ConnectedShop = connect(
    null,
    mapDispatchToProps
)(Shop);

export default ConnectedShop;
