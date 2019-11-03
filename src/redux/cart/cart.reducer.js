import {ADD_ITEM_TO_CART, TOGGLE_CART_SHOWN} from "./cart.types";
import {groupCartItems} from "./cart.utils";

const INITIAL_STATE = {
  cartIsShown: false,
  cartItems: []
};

function cartReducer (state = INITIAL_STATE, action = {}) {
  const {payload, type} = action;

  switch (type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: groupCartItems(state.cartItems, payload)
      };

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
