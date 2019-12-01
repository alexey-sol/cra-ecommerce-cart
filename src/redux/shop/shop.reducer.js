import {
  UPDATE_COLLECTIONS
} from "./shop.types";

const INITIAL_STATE = {
  collections: []
};

function shopReducer (state = INITIAL_STATE, action = {}) {
  const {payload, type} = action;

  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };

    default:
      return state;
  }
}

export default shopReducer;
