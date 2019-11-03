import {ADD_ITEM_TO_CART, TOGGLE_CART_SHOWN} from "./cart.types";

function addItemToCart (item) {
  return {
    payload: item,
    type: ADD_ITEM_TO_CART
  };
}

function toggleCartShown () {
  return {
    type: TOGGLE_CART_SHOWN
  };
}

export {
  addItemToCart,
  toggleCartShown
};
