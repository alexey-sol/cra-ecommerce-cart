import { createSelector } from "reselect";

function selectPayment ({ payment }) {
    return payment;
}

export const selectCharge = createSelector(
    [selectPayment],
    ({ charge }) => charge
);

export const selectError = createSelector(
    [selectPayment],
    ({ error }) => error
);

export const selectIsPaymentPending = createSelector(
    [selectPayment],
    ({ isPending }) => isPending
);
