function getErrorMessage (error = {}) {
    const isJoiValidationError = error.isJoi;

    return (isJoiValidationError)
        ? error.details[0].message
        : error.message;
}

export default getErrorMessage;
