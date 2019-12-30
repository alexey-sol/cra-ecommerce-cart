import {SIGN_OUT_SUCCESS} from "redux/auth/auth.types";
import {all, call, put, takeLatest} from "redux-saga/effects";
import {clearCart} from "./cart.actions";

function * clearCartOnSignOut () {
  yield put(clearCart());
}

function * onSignOutSuccess () {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function * cartSagas () {
  yield all([
    call(onSignOutSuccess)
  ]);
}

export {
  clearCartOnSignOut,
  onSignOutSuccess,
  cartSagas
};
