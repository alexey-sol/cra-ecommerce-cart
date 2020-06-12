export default (
    response,
    data,
    statusCode = 200
) => {
    return response
        .status(statusCode)
        .send(data);
};
