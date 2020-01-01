import {PAY_START} from "./payment.types";
import axios from "axios";

import {
  all,
  call,
  put,
  takeLatest
} from "redux-saga/effects";

import {
  payFailure,
  paySuccess
} from "./payment.actions";

function * pay ({payload = {}}) {
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

function * onPayStart () {
  yield takeLatest(PAY_START, pay);
}

function * paymentSagas () {
  yield all([
    call(onPayStart)
  ]);
}

export {
  pay,
  onPayStart,
  paymentSagas
};
