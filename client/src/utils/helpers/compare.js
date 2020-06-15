export default (key, isAscending = true) => {
    return (a, b) => {
        if (!a[key] || !b[key]) {
            return 0;
        }

        const isString = (value) => typeof value === "string";

        const valueA = (isString(a[key]))
            ? a[key].toLowerCase()
            : a[key];

        const valueB = (isString(b[key]))
            ? b[key].toLowerCase()
            : b[key];

        let comparison = 0;

        if (valueA > valueB) {
            comparison = 1;
        } else if (valueA < valueB) {
            comparison = -1;
        }

        return (!isAscending)
            ? (comparison * -1)
            : comparison;
    };
};
