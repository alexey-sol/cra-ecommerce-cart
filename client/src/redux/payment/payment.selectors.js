import {createSelector} from "reselect";

function selectPayment ({payment}) {
  return payment;
}

const selectCharge = createSelector(
  [selectPayment],
  ({charge}) => charge
);

const selectError = createSelector(
  [selectPayment],
  ({error}) => error
);

export {
  selectCharge,
  selectError
};
