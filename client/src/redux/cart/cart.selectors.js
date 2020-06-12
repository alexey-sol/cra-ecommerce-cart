import { createSelector } from "reselect";

function selectCart ({ cart }) {
    return cart;
}

export const selectCartItems = createSelector(
    [selectCart],
    ({ cartItems }) => cartItems
);

export const selectCartIsShown = createSelector(
    [selectCart],
    ({ cartIsShown }) => cartIsShown
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((overallQuantity, cartItem) => {
        return overallQuantity + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price;
    }, 0)
);
