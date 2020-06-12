import { UNPROCESSABLE_ENTITY } from "http-status";

import logger from "@logger";

export default (
    error,
    request,
    response,
    next
) => {
    const isJoiValidationError = error.isJoi;

    if (isJoiValidationError) {
        error.statusCode = UNPROCESSABLE_ENTITY; // eslint-disable-line
    }

    logger.error(error);
    next(error);
};
