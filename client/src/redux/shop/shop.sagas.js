import {
    all,
    call,
    put,
    takeEvery
} from "redux-saga/effects";

import { FETCH_CATEGORIES_START } from "./shop.types";
import { convertCollectionsSnapshotToMap, firestore } from "utils/firebase/firebase";
import { fetchCategoriesFailure, fetchCategoriesSuccess } from "./shop.actions";

export function * fetchCategoriesAsync () {
    try {
        const categoryRef = firestore.collection("releases");
        const snapshot = yield categoryRef.get();
        const categoriesMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        yield put(fetchCategoriesSuccess(categoriesMap));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}

export function * fetchCategoriesStart () {
    yield takeEvery(FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function * shopSagas () {
    yield all([
        call(fetchCategoriesStart)
    ]);
}
