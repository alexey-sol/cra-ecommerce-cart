import {
  CHECK_USER_SESSION,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
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

function checkUserSession () {
  return {
    type: CHECK_USER_SESSION
  };
}

function emailSignInStart (emailAndPassword) {
  return {
    payload: emailAndPassword,
    type: EMAIL_SIGN_IN_START
  };
}

function googleSignInStart () {
  return {
    type: GOOGLE_SIGN_IN_START
  };
}

function setUser (user) {
  return {
    payload: user,
    type: SET_USER
  };
}

function signInFailure (error) {
  return {
    payload: error,
    type: SIGN_IN_FAILURE
  };
}

function signInSuccess (user) {
  return {
    payload: user,
    type: SIGN_IN_SUCCESS
  };
}

function signOutFailure (error) {
  return {
    payload: error,
    type: SIGN_OUT_FAILURE
  };
}

function signOutStart () {
  return {
    type: SIGN_OUT_START
  };
}

function signOutSuccess () {
  return {
    type: SIGN_OUT_SUCCESS
  };
}

function signUpFailure (error) {
  return {
    payload: error,
    type: SIGN_UP_FAILURE
  };
}

function signUpStart (userCredentials) {
  return {
    payload: userCredentials,
    type: SIGN_UP_START
  };
}

function signUpSuccess ({user, additionalData}) {
  return {
    payload: {user, additionalData},
    type: SIGN_UP_SUCCESS
  };
}

export {
  checkUserSession,
  emailSignInStart,
  googleSignInStart,
  setUser,
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutStart,
  signOutSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess
};
