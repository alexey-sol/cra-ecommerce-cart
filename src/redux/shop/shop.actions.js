import {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore}
  from "utils/firebase/firebase";

function fetchCollectionsFailure (errorMessage) {
  return {
    payload: errorMessage,
    type: FETCH_COLLECTIONS_FAILURE
  };
}

function fetchCollectionsStart () {
  return {
    type: FETCH_COLLECTIONS_START
  };
}

function fetchCollectionsStartAsync () {
  return async (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    try {
      const snapshot = await collectionRef.get();
      const collections = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collections));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message));
    }
  };
}

function fetchCollectionsSuccess (collections) {
  return {
    payload: collections,
    type: FETCH_COLLECTIONS_SUCCESS
  };
}

export {
  fetchCollectionsFailure,
  fetchCollectionsStart,
  fetchCollectionsStartAsync,
  fetchCollectionsSuccess
};
