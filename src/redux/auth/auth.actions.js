import {SET_USER} from "./auth.types";

function setUser (user) {
  return {
    payload: user,
    type: SET_USER
  };
}

export {
  setUser
};
