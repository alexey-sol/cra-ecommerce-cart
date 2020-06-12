import moment from "moment";

class DateFormatter {
    constructor (date) {
        this.date = date;
    }

    formatByPattern (pattern = "YYYY-MM-DD") {
        return moment(this.date).format(pattern);
    }
}

export default DateFormatter;
