import { createSelector } from "reselect";

function selectShop ({ shop }) {
    return shop;
}

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    ({ isFetching }) => isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    ({ collections }) => Boolean(collections)
);

export const selectShopCollections = createSelector(
    [selectShop],
    ({ collections }) => collections
);

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => {
        return Object.keys(collections).map(collection => collections[collection]);
    }
);

export const selectShopCollection = (collectionUrlParam) => {
    return createSelector(
        [selectShopCollections],
        (collections) => collections[collectionUrlParam]
    );
};
