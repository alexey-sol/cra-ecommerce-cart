import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS
} from "./shop.types";

const INITIAL_STATE = {
    categories: [],
    errorMessage: null,
    isPending: false
};

function shopReducer (state = INITIAL_STATE, action = {}) {
    const { payload, type } = action;

    switch (type) {
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                errorMessage: payload,
                isPending: false
            };

        case FETCH_CATEGORIES_START:
            return {
                ...state,
                isPending: true
            };

        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isPending: false
            };

        default:
            return state;
    }
}

export default shopReducer;
