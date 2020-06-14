import {
    FETCH_GENRES_FAILURE,
    FETCH_GENRES_START,
    FETCH_GENRES_SUCCESS
} from "./shop.types";

import {
    convertCollectionsSnapshotToMap,
    firestore
} from "utils/firebase/firebase";

export function fetchGenresFailure (errorMessage) {
    return {
        payload: errorMessage,
        type: FETCH_GENRES_FAILURE
    };
}

export function fetchGenresStart () {
    return {
        type: FETCH_GENRES_START
    };
}

export function fetchGenresStartAsync () {
    return async (dispatch) => {
        const genreRef = firestore.collection("genres");
        dispatch(fetchGenresStart());

        try {
            const snapshot = await genreRef.get();
            const genres = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchGenresSuccess(genres));
        } catch (error) {
            dispatch(fetchGenresFailure(error.message));
        }
    };
}

export function fetchGenresSuccess (genres) {
    return {
        payload: genres,
        type: FETCH_GENRES_SUCCESS
    };
}
