import {
  PAY_FAILURE,
  PAY_START,
  PAY_SUCCESS
} from "./payment.types";

function payFailure (error) {
  return {
    payload: error,
    type: PAY_FAILURE
  };
}

function payStart (paymentData) {
  return {
    payload: paymentData,
    type: PAY_START
  };
}

function paySuccess (charge) {
  return {
    payload: charge,
    type: PAY_SUCCESS
  };
}

export {
  payFailure,
  payStart,
  paySuccess
};
