import {SET_USER} from "./auth.types";

const INITIAL_STATE = {
  user: null
};

function authReducer (state = INITIAL_STATE, action = {}) {
  const {payload, type} = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };

    default:
      return state;
  }
}

export default authReducer;
