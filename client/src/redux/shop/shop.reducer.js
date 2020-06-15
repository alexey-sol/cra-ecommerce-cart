import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS
} from "./shop.types";

const INITIAL_STATE = {
    categories: [],
    errorMessage: null,
    isFetching: false
};

function shopReducer (state = INITIAL_STATE, action = {}) {
    const { payload, type } = action;

    switch (type) {
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                errorMessage: payload,
                isFetching: false
            };

        case FETCH_CATEGORIES_START:
            return {
                ...state,
                isFetching: true
            };

        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isFetching: false
            };

        default:
            return state;
    }
}

export default shopReducer;
