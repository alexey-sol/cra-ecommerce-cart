import { INTERNAL_SERVER_ERROR } from "http-status";

import formatErrorForResponse from "@utils/formatters/formatErrorForResponse";
import sendResponse from "@utils/http/sendResponse";

export default (
    error,
    request,
    response,
    next
) => {
    if (response.headersSent) {
        return next(error);
    }

    sendResponse(
        response,
        formatErrorForResponse(error),
        error.statusCode || INTERNAL_SERVER_ERROR
    );
};
