import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CategoriesOverview from "./CategoriesOverview.component";
import WithSpinner from "components/WithSpinner";
import { defaultProps, propTypes } from "./CategoriesOverview.container.props";

import {
    selectCategoriesForPreview,
    selectIsCategoryFetching
} from "redux/shop/shop.selectors";

CategoriesOverviewContainer.defaultProps = defaultProps;
CategoriesOverviewContainer.propTypes = propTypes;

function CategoriesOverviewContainer ({ categories }) {
    return (
        <CategoriesOverview categories={categories} />
    );
}

const mapStateToProps = createStructuredSelector({
    categories: selectCategoriesForPreview,
    isFetching: selectIsCategoryFetching
});

const ConnectedCategoriesOverview = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoriesOverviewContainer);

export default ConnectedCategoriesOverview;
