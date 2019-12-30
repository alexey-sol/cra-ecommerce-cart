import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  TOGGLE_CART_SHOWN
} from "./cart.types";

function addItemToCart (item) {
  return {
    payload: item,
    type: ADD_ITEM_TO_CART
  };
}

function clearCart () {
  return {
    type: CLEAR_CART
  };
}

function clearItemFromCart (item) {
  return {
    payload: item,
    type: CLEAR_ITEM_FROM_CART
  };
}

function removeItem (item) {
  return {
    payload: item,
    type: REMOVE_ITEM
  };
}

function toggleCartShown () {
  return {
    type: TOGGLE_CART_SHOWN
  };
}

export {
  addItemToCart,
  clearCart,
  clearItemFromCart,
  removeItem,
  toggleCartShown
};
