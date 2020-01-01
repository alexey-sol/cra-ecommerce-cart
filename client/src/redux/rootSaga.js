import {all, call} from "redux-saga/effects";
import {authSagas} from "./auth/auth.sagas";
import {cartSagas} from "./cart/cart.sagas";
import {paymentSagas} from "./payment/payment.sagas";
import {shopSagas} from "./shop/shop.sagas";

function * rootSaga () {
  yield all([
    call(authSagas),
    call(cartSagas),
    call(paymentSagas),
    call(shopSagas)
  ]);
};

export default rootSaga;
