import {FETCH_COLLECTIONS_START} from "./shop.types";
import {all, call, put, takeEvery} from "redux-saga/effects";
import {convertCollectionsSnapshotToMap, firestore}
  from "utils/firebase/firebase";
import {fetchCollectionsFailure, fetchCollectionsSuccess}
  from "./shop.actions";

function * fetchCollectionsAsync () {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function * fetchCollectionsStart () {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

function * shopSagas () {
  yield all([
    call(fetchCollectionsStart)
  ]);
}

export {
  fetchCollectionsAsync,
  fetchCollectionsStart,
  shopSagas
};
