import {
    all,
    call,
    put,
    takeEvery
} from "redux-saga/effects";

import { FETCH_GENRES_START } from "./shop.types";
import { convertCollectionsSnapshotToMap, firestore } from "utils/firebase/firebase";
import { fetchGenresFailure, fetchGenresSuccess } from "./shop.actions";

export function * fetchGenresAsync () {
    try {
        const genreRef = firestore.collection("releases");
        const snapshot = yield genreRef.get();
        const genresMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        yield put(fetchGenresSuccess(genresMap));
    } catch (error) {
        yield put(fetchGenresFailure(error.message));
    }
}

export function * fetchGenresStart () {
    yield takeEvery(FETCH_GENRES_START, fetchGenresAsync);
}

export function * shopSagas () {
    yield all([
        call(fetchGenresStart)
    ]);
}
