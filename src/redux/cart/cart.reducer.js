import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_SHOWN
} from "./cart.types";
import {groupCartItems, removeItemFromCart} from "./cart.utils";

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

    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(({id}) => id !== payload.id)
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
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
