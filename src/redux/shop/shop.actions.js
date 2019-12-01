import {
  UPDATE_COLLECTIONS
} from "./shop.types";

function updateCollections (collections) {
  return {
    payload: collections,
    type: UPDATE_COLLECTIONS
  };
}

export {
  updateCollections
};
