import { createSelector } from "reselect";

function selectShop ({ shop }) {
    return shop;
}

export const selectIsCategoryFetching = createSelector(
    [selectShop],
    ({ isFetching }) => isFetching
);

export const selectIsCategoriesFetching = createSelector(
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
