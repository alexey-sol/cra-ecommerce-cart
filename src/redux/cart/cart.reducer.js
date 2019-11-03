import {TOGGLE_CART_SHOWN} from "./cart.types";

const INITIAL_STATE = {
  cartIsShown: false
};

function cartReducer (state = INITIAL_STATE, action = {}) {
  const {type} = action;

  switch (type) {
    case TOGGLE_CART_SHOWN:
      return {
        ...state,
        cartIsShown: !state.cartIsShown
      };

    default:
      return state;
  }
}

export default cartReducer;
