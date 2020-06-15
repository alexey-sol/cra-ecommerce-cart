import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import Category from "./Category.component";
import WithSpinner from "components/WithSpinner";
import { defaultProps, propTypes } from "./Category.container.props";

import {
    selectCategoriesForPreview,
    selectIsCategoriesPending
} from "redux/shop/shop.selectors";

CategoryContainer.defaultProps = defaultProps;
CategoryContainer.propTypes = propTypes;

function CategoryContainer ({ categories, match }) {
    const { categoryId } = match.params;

    const category = categories.find(({ title }) => title.toLowerCase() === categoryId);

    return (
        <Category category={category} />
    );
}

const mapStateToProps = createStructuredSelector({
    categories: selectCategoriesForPreview,
    isPending: selectIsCategoriesPending
});

const ConnectedPage = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryContainer);

export default ConnectedPage;
