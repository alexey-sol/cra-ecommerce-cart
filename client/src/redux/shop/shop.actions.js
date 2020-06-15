import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS
} from "./shop.types";

import {
    convertCollectionsSnapshotToMap,
    firestore
} from "utils/firebase/firebase";

export function fetchCategoriesFailure (errorMessage) {
    return {
        payload: errorMessage,
        type: FETCH_CATEGORIES_FAILURE
    };
}

export function fetchCategoriesStart () {
    return {
        type: FETCH_CATEGORIES_START
    };
}

export function fetchCategoriesStartAsync () {
    return async (dispatch) => {
        const categoryRef = firestore.collection("releases");
        dispatch(fetchCategoriesStart());

        try {
            const snapshot = await categoryRef.get();
            const categories = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCategoriesSuccess(categories));
        } catch (error) {
            dispatch(fetchCategoriesFailure(error.message));
        }
    };
}

export function fetchCategoriesSuccess (categories) {
    return {
        payload: categories,
        type: FETCH_CATEGORIES_SUCCESS
    };
}
