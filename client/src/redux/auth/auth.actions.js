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

export function checkSession () {
    return {
        type: CHECK_USER_SESSION
    };
}

export function emailSignInStart (emailAndPassword) {
    return {
        payload: emailAndPassword,
        type: EMAIL_SIGN_IN_START
    };
}

export function googleSignInStart () {
    return {
        type: GOOGLE_SIGN_IN_START
    };
}

export function resetAuthState () {
    return {
        type: RESET_AUTH_STATE
    };
}

export function setUser (user) {
    return {
        payload: user,
        type: SET_USER
    };
}

export function signInFailure (error) {
    return {
        payload: error,
        type: SIGN_IN_FAILURE
    };
}

export function signInSuccess (user) {
    return {
        payload: user,
        type: SIGN_IN_SUCCESS
    };
}

export function signOutFailure (error) {
    return {
        payload: error,
        type: SIGN_OUT_FAILURE
    };
}

export function signOutStart () {
    return {
        type: SIGN_OUT_START
    };
}

export function signOutSuccess () {
    return {
        type: SIGN_OUT_SUCCESS
    };
}

export function signUpFailure (error) {
    return {
        payload: error,
        type: SIGN_UP_FAILURE
    };
}

export function signUpStart (userCredentials) {
    return {
        payload: userCredentials,
        type: SIGN_UP_START
    };
}

export function signUpSuccess ({ user, additionalData }) {
    return {
        payload: { user, additionalData },
        type: SIGN_UP_SUCCESS
    };
}
