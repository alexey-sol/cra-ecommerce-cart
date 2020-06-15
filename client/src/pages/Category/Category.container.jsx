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

import { sortItems } from "redux/shop/shop.actions";

CategoryContainer.defaultProps = defaultProps;
CategoryContainer.propTypes = propTypes;

function CategoryContainer ({ categories, match, onSortItems }) {
    const { categoryId } = match.params;
    const category = categories.find(({ title }) => title.toLowerCase() === categoryId);

    return (
        <Category
            category={category}
            onSortItems={onSortItems}
        />
    );
}

const mapStateToProps = createStructuredSelector({
    categories: selectCategoriesForPreview,
    isPending: selectIsCategoriesPending
});

const mapDispatchToProps = (dispatch) => ({
    onSortItems: (options) => dispatch(sortItems(options))
});

const ConnectedPage = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithSpinner
)(CategoryContainer);

export default ConnectedPage;
