import {
    PAY_FAILURE,
    PAY_START,
    PAY_SUCCESS,
    RESET_PAYMENT_STATE
} from "./payment.types";

export function payFailure (error) {
    return {
        payload: error,
        type: PAY_FAILURE
    };
}

export function payStart (paymentData) {
    return {
        payload: paymentData,
        type: PAY_START
    };
}

export function paySuccess (charge) {
    return {
        payload: charge,
        type: PAY_SUCCESS
    };
}

export function resetPaymentState () {
    return {
        type: RESET_PAYMENT_STATE
    };
}
