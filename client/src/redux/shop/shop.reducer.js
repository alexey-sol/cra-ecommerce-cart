import {
    FETCH_GENRES_FAILURE,
    FETCH_GENRES_START,
    FETCH_GENRES_SUCCESS
} from "./shop.types";

const INITIAL_STATE = {
    errorMessage: null,
    genres: [],
    isFetching: false
};

function shopReducer (state = INITIAL_STATE, action = {}) {
    const { payload, type } = action;

    switch (type) {
        case FETCH_GENRES_FAILURE:
            return {
                ...state,
                errorMessage: payload,
                isFetching: false
            };

        case FETCH_GENRES_START:
            return {
                ...state,
                isFetching: true
            };

        case FETCH_GENRES_SUCCESS:
            return {
                ...state,
                genres: payload,
                isFetching: false
            };

        default:
            return state;
    }
}

export default shopReducer;
