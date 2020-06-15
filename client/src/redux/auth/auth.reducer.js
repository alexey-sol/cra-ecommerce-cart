import {
    CHECK_USER_SESSION,
    EMAIL_SIGN_IN_START,
    GOOGLE_SIGN_IN_START,
    RESET_AUTH_STATE,
    SET_USER,
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_START,
    SIGN_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from "./auth.types";

const INITIAL_STATE = {
    error: null,
    isPending: false,
    user: null
};

function authReducer (state = INITIAL_STATE, action = {}) {
    const { payload, type } = action;

    switch (type) {
        case CHECK_USER_SESSION:
            return {
                ...state,
                user: payload
            };

        case EMAIL_SIGN_IN_START:
        case GOOGLE_SIGN_IN_START:
        case SIGN_OUT_START:
        case SIGN_UP_START:
            return {
                ...state,
                isPending: true
            };

        case RESET_AUTH_STATE:
            return INITIAL_STATE;

        case SET_USER:
            return {
                ...state,
                user: payload
            };

        case SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE:
        case SIGN_UP_FAILURE:
            return {
                ...state,
                error: payload,
                isPending: false
            };

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                error: null,
                isPending: false,
                user: payload
            };

        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                error: null,
                isPending: false,
                user: null
            };

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                error: null,
                isPending: false,
                user: payload
            };

        default:
            return state;
    }
}

export default authReducer;
