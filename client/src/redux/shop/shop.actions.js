import {
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS
} from "./shop.types";

import {
    convertCollectionsSnapshotToMap,
    firestore
} from "utils/firebase/firebase";

export function fetchCollectionsFailure (errorMessage) {
    return {
        payload: errorMessage,
        type: FETCH_COLLECTIONS_FAILURE
    };
}

export function fetchCollectionsStart () {
    return {
        type: FETCH_COLLECTIONS_START
    };
}

export function fetchCollectionsStartAsync () {
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

export function fetchCollectionsSuccess (collections) {
    return {
        payload: collections,
        type: FETCH_COLLECTIONS_SUCCESS
    };
}
