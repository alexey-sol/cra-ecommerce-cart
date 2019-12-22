import {
  CHECK_USER_SESSION,
  SET_USER,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS
} from "./auth.types";

const INITIAL_STATE = {
  error: null,
  user: null
};

function authReducer (state = INITIAL_STATE, action = {}) {
  const {payload, type} = action;

  switch (type) {
    case CHECK_USER_SESSION:
      return {
        ...state,
        user: payload
      };

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
        error: payload
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        user: payload
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        user: null
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
        user: payload
      };

    default:
      return state;
  }
}

export default authReducer;
