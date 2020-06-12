import {
    PAY_FAILURE,
    PAY_SUCCESS
} from "./payment.types";

const INITIAL_STATE = {
    charge: null,
    error: null
};

function paymentReducer (state = INITIAL_STATE, action = {}) {
    const { payload, type } = action;

    switch (type) {
        case PAY_FAILURE:
            return {
                ...state,
                error: payload
            };

        case PAY_SUCCESS:
            return {
                ...state,
                charge: payload,
                error: null
            };

        default:
            return state;
    }
}

export default paymentReducer;
