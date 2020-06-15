import {
    PAY_FAILURE,
    PAY_RESET,
    PAY_START,
    PAY_SUCCESS
} from "./payment.types";

export function payFailure (error) {
    return {
        payload: error,
        type: PAY_FAILURE
    };
}

export function payReset () {
    return {
        type: PAY_RESET
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
