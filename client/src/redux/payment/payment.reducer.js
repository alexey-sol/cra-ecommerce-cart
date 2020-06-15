import {
    PAY_FAILURE,
    PAY_START,
    PAY_SUCCESS,
    RESET_PAYMENT_STATE
} from "./payment.types";

const INITIAL_STATE = {
    charge: null,
    error: null,
    isPending: false
};

function paymentReducer (state = INITIAL_STATE, action = {}) {
    const { payload, type } = action;

    switch (type) {
        case PAY_FAILURE:
            return {
                ...state,
                error: payload,
                isPending: false
            };

        case PAY_START:
            return {
                ...state,
                isPending: true
            };

        case PAY_SUCCESS:
            return {
                ...state,
                charge: payload,
                error: null,
                isPending: false
            };

        case RESET_PAYMENT_STATE:
            return INITIAL_STATE;

        default:
            return state;
    }
}

export default paymentReducer;
