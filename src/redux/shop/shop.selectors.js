import {createSelector} from "reselect";

function selectShop ({shop}) {
  return shop;
}

export const selectShopCollections = createSelector(
  [selectShop],
  ({collections}) => collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => {
    Object.keys(collections).map(collection => collections[collection]);
  }
);

export const selectShopCollection = (collectionUrlParam) => {
  return createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  );
};
