import {
    all,
    call,
    put,
    takeLatest
} from "redux-saga/effects";

import { PAY_SUCCESS } from "redux/payment/payment.types";
import { SIGN_OUT_SUCCESS } from "redux/auth/auth.types";
import { clearCart } from "./cart.actions";

export function * clearCartOnSuccessfulAction () {
    yield put(clearCart());
}

export function * onPaySuccess () {
    yield takeLatest(PAY_SUCCESS, clearCartOnSuccessfulAction);
}

export function * onSignOutSuccess () {
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSuccessfulAction);
}

export function * cartSagas () {
    yield all([
        call(onPaySuccess),
        call(onSignOutSuccess)
    ]);
}
