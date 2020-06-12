import {
    ADD_ITEM_TO_CART,
    CLEAR_CART,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM,
    TOGGLE_CART_SHOWN
} from "./cart.types";

export function addItemToCart (item) {
    return {
        payload: item,
        type: ADD_ITEM_TO_CART
    };
}

export function clearCart () {
    return {
        type: CLEAR_CART
    };
}

export function clearItemFromCart (item) {
    return {
        payload: item,
        type: CLEAR_ITEM_FROM_CART
    };
}

export function removeItem (item) {
    return {
        payload: item,
        type: REMOVE_ITEM
    };
}

export function toggleCartShown () {
    return {
        type: TOGGLE_CART_SHOWN
    };
}
