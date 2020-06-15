export default (error = {}) => {
    const {
        data = {}
    } = error.response || {};

    return data.error;
};
