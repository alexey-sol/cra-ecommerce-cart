import { Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import { connect } from "react-redux";

import Spinner from "components/Spinner";
import { fetchGenresStart } from "redux/shop/shop.actions";
import { propTypes } from "./Shop.props";
import styles from "./Shop.module.scss";

const Genre = lazy(() => import("pages/Genre"));
const GenresOverview = lazy(() => import("components/GenresOverview"));

Shop.propTypes = propTypes;

function Shop ({ onFetchGenresStart, match }) {
    useEffect(() => {
        onFetchGenresStart();
    }, [onFetchGenresStart]);

    return (
        <section className={styles.container}>
            <Suspense fallback={<Spinner />}>
                <Route
                    component={GenresOverview}
                    exact
                    path={match.path}
                />

                <Route
                    component={Genre}
                    path={`${match.path}/:genreId`}
                />
            </Suspense>
        </section>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onFetchGenresStart: () => dispatch(fetchGenresStart())
});

const ConnectedShop = connect(
    null,
    mapDispatchToProps
)(Shop);

export default ConnectedShop;
