import {SET_USER} from "./auth.constants";

function setUser (user) {
  return {
    payload: user,
    type: SET_USER
  };
}

export {
  setUser
};
