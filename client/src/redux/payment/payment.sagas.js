import axios from "axios";

import getErrorFromResponse from "utils/http/getErrorFromResponse";

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
            url: "api/v1/payment"
        });

        yield put(paySuccess(response.data));
    } catch (responseError) {
        const error = getErrorFromResponse(responseError);
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
