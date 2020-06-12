import axios from "axios";

import {
    all,
    call,
    put,
    takeLatest
} from "redux-saga/effects";

import { PAY_START } from "./payment.types";
import { payFailure, paySuccess } from "./payment.actions";

export function * pay ({ payload = {} }) {
    try {
        const response = yield axios({
            data: payload,
            method: "post",
            url: "payment"
        });

        const charge = response.data && response.data.success;
        yield put(paySuccess(charge));
    } catch (error) {
        yield put(payFailure(error));
    }
}

export function * onPayStart () {
    yield takeLatest(PAY_START, pay);
}

export function * paymentSagas () {
    yield all([
        call(onPayStart)
    ]);
}
