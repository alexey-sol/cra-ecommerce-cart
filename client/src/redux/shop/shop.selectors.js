import { createSelector } from "reselect";

function selectShop ({ shop }) {
    return shop;
}

export const selectIsCategoryPending = createSelector(
    [selectShop],
    ({ isPending }) => isPending
);

export const selectIsCategoriesPending = createSelector(
    [selectShop],
    ({ categories }) => categories.length === 0
);

export const selectCategories = createSelector(
    [selectShop],
    ({ categories }) => categories
);

export const selectCategoriesForPreview = createSelector(
    [selectCategories],
    (categories) => {
        return Object.keys(categories).map(category => categories[category]);
    }
);
