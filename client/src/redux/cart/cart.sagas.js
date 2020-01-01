import {PAY_SUCCESS} from "redux/payment/payment.types";
import {SIGN_OUT_SUCCESS} from "redux/auth/auth.types";
import {all, call, put, takeLatest} from "redux-saga/effects";
import {clearCart} from "./cart.actions";

function * clearCartOnSuccessfulAction () {
  yield put(clearCart());
}

function * onPaySuccess () {
  yield takeLatest(PAY_SUCCESS, clearCartOnSuccessfulAction);
}

function * onSignOutSuccess () {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSuccessfulAction);
}

function * cartSagas () {
  yield all([
    call(onPaySuccess),
    call(onSignOutSuccess)
  ]);
}

export {
  clearCartOnSuccessfulAction,
  onPaySuccess,
  onSignOutSuccess,
  cartSagas
};
